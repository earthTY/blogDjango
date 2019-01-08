# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class categories(models.Model):
    lang = models.CharField('语言', max_length=25)
    menu = models.CharField('目录名', max_length=25)
    menu_url = models.CharField('目录Url字段', max_length=25, default="")
    menu_comment = models.CharField('目录解释', max_length=512, default="")
    menu_keywords = models.CharField('keywords', max_length=512, default="")
    priority = models.IntegerField('优先级', default=0)
    is_product = models.BooleanField('是否为产品', default=False)


class article_info(models.Model):
    categories = models.ForeignKey(categories)
    title = models.CharField('文章标题', max_length=128)
    keyword = models.CharField("关键词", max_length= 512, default="")
    url_title = models.CharField('文章url', max_length=256)
    img_url = models.CharField('主图链接', max_length=512)
    introduction = models.TextField('文章预览', default='')
    subject_body = models.TextField('文章主体', default='')
    product_id = models.IntegerField('对应产品编号',default=-1)
    product_menu = models.IntegerField('产品目录',default= -1)

class tags(models.Model):
    tag_name = models.CharField('Tag关键词', max_length=50)
    tag_url = models.CharField('Tag对应URL', max_length=50, default="")
    lang = models.CharField('语言', max_length=25, default='us')

class article_tags(models.Model):
    article_id = models.ForeignKey(article_info)
    tag_id = models.ForeignKey(tags)
