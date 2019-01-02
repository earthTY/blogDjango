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

import json


# Create your views here.


def manager_view(req, page):
    return render(req, 'manage/{page}.html'.format(page=page))

def managerS_view(req, page, sp):
    return render(req, 'manage/{page}/{sp}.html'.format(page=page, sp=sp))



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


@api_view(['post'])
def create_tag(req):
    reqData = (json.loads(req.body))
    tag_name = reqData.get('tag_name')

    tag_url = str(tag_name).lower().strip().replace(' ','-')


    tags.objects.create(
        tag_name = tag_name,
        tag_url = tag_url
    )

    return Response({
        'code': 0,
        'message': 'create tag success!'
    })


@api_view(['post'])
def create_article_info(req):
    reqData = (json.loads(req.body))

    categories_id = reqData.get('categories_id')
    title = reqData.get('title')
    url_title = reqData.get('url_title', '')
    img_url = reqData.get('img_url' '')
    introduction = reqData.get('introduction','')
    is_product = reqData.get('is_product', False)
    subject_body = reqData.get('subject_body','')
    product_id = reqData.get('product_id',-1)
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
            is_product= is_product,
            subject_body= subject_body,
            product_id= int(product_id),
            categories_id= categories_id
        )

        print(article.id)

        for tag in tag_list:
            article_tags.objects.create(
                tag_id_id= tag,
                article_id_id= article.id
            )

        return Response({
            'code': 0,
            'message': 'ok!'
        })
    else:
        return Response({
            'code': -1,
            'message': 'error!'
        })


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