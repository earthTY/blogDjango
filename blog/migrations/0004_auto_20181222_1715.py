# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-12-22 09:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20181222_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article_info',
            name='img_url',
            field=models.CharField(max_length=512, verbose_name='\u4e3b\u56fe\u94fe\u63a5'),
        ),
    ]