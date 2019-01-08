# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from user_agents import parse
from django.http import HttpResponseRedirect

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.forms.models import model_to_dict
from blog.models import *
import json
import re
import math


# Create your views here.

#获取目录页面
@api_view(['get'])
def show_menu_page(req, lang, menu_url, page_num):
    if not lang:
        lang = "us"
    else:
        lang = lang[0:-1]

    if re.match(r'/\d+',page_num):
        page_num = int(page_num[1:]) - 1
    else:
        page_num = 0

    page_count = 8

    obj_menu = categories.objects.filter(lang=lang, menu_url=menu_url).first()

    if obj_menu:
        menu_name= obj_menu.menu
    else:
        if lang == "us":
            return HttpResponseRedirect('/404.html'.format(lang))
        else:
            return HttpResponseRedirect('/{}/404.html'.format(lang))

    all_page = math.ceil(article_info.objects.filter(categories__lang=lang, categories__menu=menu_name).count() / float(page_count))
    obj_articles = article_info.objects.filter(categories__lang=lang, categories__menu=menu_name).order_by("-id")[page_num*page_count:page_count]

    blog_list = []
    for item in obj_articles:
        one_json = model_to_dict(item)
        one_json["tags_list"] = get_article_tags(item.id)
        blog_list.append(one_json)

    # 根据目录获取最新5篇博客
    favorite_articles = get_favorite_articles(lang, menu_name, True)

    # 获取最新的10条关键词
    new_tags = get_new_tags(lang, None, 10)

    # 获取对应目录下介绍的产品
    menu_pro = article_info.objects.filter(
        categories__lang=lang,
        categories__is_product= 1
    )

    menu_pro = menu_pro.order_by("-id").first()


    if menu_pro:
        obj_menu_products = model_to_dict(menu_pro)
    else:
        obj_menu_products = {}

    return render(req,'{}/blog-list.html'.format(lang),{
        'data_list':blog_list,
        'blog_pro':obj_menu_products,
        'new_tags':new_tags,
        'favorite_articles':favorite_articles,
        'menu_name':menu_name,
        'page_count':all_page,
        'current_page':page_num+1,
        'domain':getDomain(req,lang)
    })

#获取单页例如404、about us
@api_view(['get'])
def show_simple_page(req,lang):

    xPath = req.path[1:].split("/")

    if len(xPath) == 1:
        lang = "us"
    else:
        lang = xPath[0]

    try:
        return render(req, '{}/{}'.format(lang,xPath[-1]))
    except Exception, e:
        if lang == "us":
            return HttpResponseRedirect('/404.html'.format(lang))
        else:
            return HttpResponseRedirect('/{}/404.html'.format(lang))

#获取文章页面
@api_view(['get'])
def show_article(req,lang,url_title):
    if not lang:
        lang = "us"
    else:
        lang = lang[0:-1]

    obj_article = get_article_by_lang_name(lang,url_title)

    if not obj_article:
        if lang == "us":
            return HttpResponseRedirect('/404.html'.format(lang))
        else:
            return HttpResponseRedirect('/{}/404.html'.format(lang))
    else:
        one_json = model_to_dict(obj_article)

        one_json["categories_info"] = model_to_dict(obj_article.categories)

        tag_list = get_article_tags(obj_article.id)


        #获取对应的产品页面
        if obj_article.product_id != -1:
            blog_pro=get_blog_product(obj_article.product_id)
        else:
            blog_pro = model_to_dict(obj_article)


        #根据目录获取最新5篇博客
        favorite_articles = get_favorite_articles(lang, obj_article.categories.menu, True)


        #获取最新的10条关键词
        new_tags = get_new_tags(lang, None, 10)


        one_json["categories_info"] = model_to_dict(obj_article.categories)
        one_json["tags_list"] = tag_list
        one_json["blog_pro"] = blog_pro
        one_json["favorite_articles"] = favorite_articles
        one_json["new_tags"] = new_tags
        one_json["domain"] = getDomain(req,lang)


        if obj_article.product_id != -1:
            return render(req,'{}/articles.html'.format(lang),one_json)
        else:
            return render(req, '{}/products/{}/index.html'.format(lang,url_title), one_json)


#首页信息获取
@api_view(['get'])
def show_main_page(req,lang):
    if not lang:
        lang = "us"
    else:
        lang = lang[0:-1]

    return render(req,'{}/index.html'.format(lang),{
        'domain':getDomain(req,lang)
    })


@api_view(['post'])
def get_product_by_menu_name(req):
    reqData = json.loads(req.body)

    lang = reqData.get('lang', '')
    menu_name = reqData.get('menu_name', '')

    obj_articles = article_info.objects.filter(
        categories__lang=lang,
        categories__menu=menu_name
    )

    data = list(obj_articles.values())

    return Response({
        'code': 0,
        'data': data
    })


@api_view(['post'])
def get_main_page_articles(req):
    reqData = json.loads(req.body)

    lang = reqData.get('lang', '')

    obj_articles= get_favorite_articles(lang,None,False)

    return Response({
        'code':0,
        'data':obj_articles
    })






#获取域名信息
def getDomain(req,lang):
    if lang == 'us':
        domain = "{}://{}".format(req.scheme, req.META.get('HTTP_HOST', ''))
    else:
        domain = "{}://{}/{}".format(req.scheme, req.META.get('HTTP_HOST', ''), lang)

    return domain


# 根据文章ID获取对应文章Tag关键词
def get_article_tags(article_id):
    tag_list = []
    for item in article_tags.objects.filter(article_id_id=article_id):
        tag_list.append(model_to_dict(item.tag_id))
    return tag_list


#根据语言名称获取博客
def get_article_by_lang_name(lang, url_title):
    obj_article = article_info.objects.filter(
        categories__lang=lang,
        url_title=url_title,
    ).first()

    return obj_article


# 获取对应目录最新的博客
def get_favorite_articles(lang, menu_name, has_product):

    obj_articles = article_info.objects.filter(
        categories__lang=lang,
    )

    if not has_product:
        obj_articles = obj_articles.filter(categories__is_product=False)

    if menu_name:
       obj_articles = obj_articles.filter(categories__menu=menu_name)


    obj_articles = obj_articles.order_by("-id")[0:5]

    data_list =  list(obj_articles.values())

    return data_list


# 获取文章对应的产品信息
def get_blog_product(product_id):
    blog_pro = article_info.objects.filter(
        id=product_id
    ).first()

    return blog_pro


# 根据语言、获取最新的N条关键词
def get_new_tags(lang,menu,len):
    obj_tags = article_tags.objects.all()

    if(lang):
        obj_tags = obj_tags.filter(article_id__categories__lang=lang)

    if(menu):
        obj_tags = obj_tags.filter(article_id__categories__menu=menu)

    if len:
        tag_ids = []

        for line in obj_tags.values("tag_id"):
            tag_ids.append(line['tag_id'])

        obj_tags = tags.objects.filter(id__in= tag_ids).order_by("-id")[0:10].values("tag_name","tag_url")
    else:
        obj_tags = tags.objects.values("tag_name", "tag_url")


    data = list(obj_tags)
    return data

