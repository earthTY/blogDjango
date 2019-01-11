# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from user_agents import parse
from django.http import HttpResponseRedirect
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.forms.models import model_to_dict
from blog.models import *
from django.core.files.storage import FileSystemStorage

import json
import re


# Create your views here.

#页面渲染
def manager_view(req, page):
    return render(req, 'manage/{page}.html'.format(page=page))

def managerS_view(req, page, sp):
    return render(req, 'manage/{page}/{sp}.html'.format(page=page, sp=sp))





###目录模块
#创建目录
@api_view(['post'])
def create_menu(req):
    reqData = (json.loads(req.body))

    get_menu = reqData.get('title','')
    get_lang = reqData.get('lang','us')
    get_keywords = reqData.get('keywords', '')
    get_common = reqData.get('common', '')
    get_priority = reqData.get('priority',0)

    get_menu_url = '-'.join(get_menu.upper().split(' '))

    obj = categories.objects.filter(menu=get_menu,lang=get_lang).first()

    if not obj:
        categories.objects.create(
            lang= get_lang,
            menu= get_menu,
            menu_url= get_menu_url,
            menu_comment= get_common,
            menu_keywords= get_keywords,
            priority= get_priority
        )

        return Response({
            'code': 0,
            'message': 'create menu success!'
        })
    else:
        return Response({
            'code': -1,
            'message': 'menu presence!'
        })

#根据语言获取目录
@api_view(['post'])
def get_menu_by_lang(req):
    reqData = (json.loads(req.body))

    get_lang = reqData.get('lang','us')

    obj_categories = categories.objects.filter(lang= get_lang).order_by('-id')

    if obj_categories:
        obj_datas = list(obj_categories.values())
    else:
        obj_datas = []

    return Response({
        'code':0,
        'data':obj_datas
    })






###tag模块
#创建tag
@api_view(['post'])
def create_tag(req):
    reqData = (json.loads(req.body))
    tag_name = reqData.get('tag_name')

    tag_url = str(tag_name).lower().strip().replace(' ','-')

    if not tags.objects.filter(tag_name = tag_name,tag_url = tag_url).first():
        objTag = tags.objects.create(
            tag_name=tag_name,
            tag_url=tag_url
        )

        return Response({
            'code': 0,
            'data': model_to_dict(objTag),
            'message': 'create tag success!'
        })

    else:
        return Response({
            'code': 1,
            'message': 'create exist!'
        })

#获取tag词
@api_view(['post'])
def get_tags_by_lang(req):
    reqData = (json.loads(req.body))

    lang = reqData.get('lang','us')

    obj_tags = tags.objects.filter(lang = lang)

    data = list(obj_tags.values())

    return Response({
        'code':0,
        'message':'OK',
        'data':data
    })




###创建/修改/查询blog信息
#新建blog
@api_view(['post'])
def create_article_info(req):
    reqData = (json.loads(req.body))

    categories_id = reqData.get('categories_id')
    title = reqData.get('title','')
    url_title = reqData.get('url_title', '')
    img_url = reqData.get('img_url' '')
    introduction = reqData.get('introduction','')
    subject_body = reqData.get('subject_body','')
    product_id = reqData.get('product_id',-1)
    product_menu = reqData.get('product_menu', -1)
    tag_list = reqData.get('tag_list')


    obj_article = article_info.objects.filter(
        categories_id=categories_id,
        url_title=url_title
    ).first()

    if not obj_article:
        article = article_info.objects.create(
            title= title,
            url_title= url_title,
            img_url= img_url,
            introduction= introduction,
            subject_body= subject_body,
            product_id= int(product_id),
            product_menu= int(product_menu),
            categories_id= categories_id
        )

        for tag in tag_list:
            obj_tag=article_tags.objects.filter(
                tag_id_id= tag,
                article_id_id= article.id
            ).first()

            if not obj_tag:
                article_tags.objects.create(
                    tag_id_id= tag,
                    article_id_id= article.id
                )
            else:
                obj_tag.id_del = False

        return Response({
            'code': 0,
            'message': 'ok!'
        })
    else:
        return Response({
            'code': -1,
            'message': 'error!'
        })

#修改blog信息
@api_view(['post'])
def modify_article_info(req):
    reqData = (json.loads(req.body))

    id = reqData.get('id')
    categories_id = reqData.get('categories_id')
    title = reqData.get('title', '')
    url_title = reqData.get('url_title', '')
    img_url = reqData.get('img_url' '')
    introduction = reqData.get('introduction', '')
    subject_body = reqData.get('subject_body', '')
    product_id = reqData.get('product_id', -1)
    product_menu = reqData.get('product_menu', -1)
    tag_list = reqData.get('tag_list')

    obj_article = article_info.objects.filter(
        id=id
    ).first()


    if obj_article:
        obj_article.title = title
        obj_article.url_title = url_title
        obj_article.img_url = img_url
        obj_article.introduction = introduction
        obj_article.subject_body = subject_body
        obj_article.product_id = product_id
        obj_article.product_menu =  product_menu
        obj_article.categories_id = categories_id
        obj_article.save()

        for tag in tag_list:
            obj_tag = article_tags.objects.filter(
                tag_id_id=tag,
                article_id_id=obj_article.id
            ).first()

            if not obj_tag:
                article_tags.objects.create(
                    tag_id_id=tag,
                    article_id_id=article.id
                )
            else:
                obj_tag.id_del = False
                obj_tag.save()

        return Response({
            "code": 0,
            "message": 'modify success!'
        })


    else:
        return Response({
            "code":-1,
            "message":'not exits blog!'
        })


#blog查询-根据目录
@api_view(['post'])
def select_article_by_menu(req):
    reqData = (json.loads(req.body))
    lang = reqData.get("lang",'us')
    menu_id =  int(reqData.get("menu_id",'-1'))
    start_count = reqData.get("start",0)
    page_count = reqData.get("page_count",20)

    obj_articles = article_info.objects.filter(categories__lang= lang)

    if menu_id != -1:
        obj_articles = obj_articles.filter(categories__id= menu_id)

    obj_articles = obj_articles.order_by("-id")[start_count:page_count]

    data = []

    for obj_line in obj_articles:
        one_json = model_to_dict(obj_line)
        one_json["categories"] = model_to_dict(obj_line.categories)
        one_json["tags"] = []
        obj_article_tags = article_tags.objects.filter(article_id=obj_line.id,is_del=False)
        for tag_info in obj_article_tags:
            obj_tag = model_to_dict(tag_info.tag_id)
            one_json["tags"].append(obj_tag)

        data.append(one_json)

    return  Response({
        "data":data,
        "code":0,
        "message":"ok"
    })





#根据目录获取产品
@api_view(['post'])
def get_menu_products(req):
    reqData = (json.loads(req.body))

    get_lang = reqData.get('lang', 'us')
    get_id = reqData.get('menu_id', -1)

    objs=article_info.objects.filter(
        product_menu = get_id,
        categories__lang=get_lang
    )

    if objs:
        data= list(objs.values())
    else:
        data=[]

    return Response({
        'code':0,
        'message':'ok',
        'data':data
    })












#图片上传
@api_view(['post'])
def upload_img(request):
    payload = request.data

    uploaded_file_url = ''
    for key in request.FILES:
        myfile = request.FILES[key]
        fs = FileSystemStorage()
        filename = fs.save('img/{}'.format(myfile.name), myfile)
        uploaded_file_url =  fs.url(filename)

    data = dict(uploaded_file_url=uploaded_file_url)
    return Response({"code": 0,
                     "message": "ok",
                     "data": data
                     })

@api_view(['post'])
def upload_img_edit(request):
    payload = request.data

    uploaded_file_url = ''
    filename=''
    for key in request.FILES:
        myfile = request.FILES[key]
        fs = FileSystemStorage()
        filename = fs.save('img/{}'.format(myfile.name), myfile)
        uploaded_file_url =  fs.url(filename)

    data = dict(uploaded_file_url=uploaded_file_url)
    return Response({
        "code": 0,
        "message": "ok",
        "uploaded": 1,
        "fileName": filename,
        "url": uploaded_file_url
    })