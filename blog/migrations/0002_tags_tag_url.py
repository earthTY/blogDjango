# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-12-22 08:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tags',
            name='tag_url',
            field=models.CharField(default='', max_length=50, verbose_name='Tag\u5bf9\u5e94URL'),
        ),
    ]
