# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-12-22 08:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_tags_tag_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article_info',
            name='product_id',
            field=models.IntegerField(default=-1, verbose_name='\u5bf9\u5e94\u4ea7\u54c1\u7f16\u53f7'),
        ),
        migrations.AlterField(
            model_name='article_info',
            name='subject_body',
            field=models.TextField(default='', verbose_name='\u6587\u7ae0\u4e3b\u4f53'),
        ),
    ]
