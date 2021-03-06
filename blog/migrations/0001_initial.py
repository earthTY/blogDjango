# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-12-22 07:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='article_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='\u6587\u7ae0\u6807\u9898')),
                ('url_title', models.CharField(max_length=128, verbose_name='\u6587\u7ae0url')),
                ('img_url', models.CharField(max_length=128, verbose_name='\u4e3b\u56fe\u94fe\u63a5')),
                ('introduction', models.CharField(max_length=256, verbose_name='\u6587\u7ae0\u9884\u89c8')),
                ('is_product', models.BooleanField(default=False, verbose_name='\u662f\u5426\u4e3a\u4ea7\u54c1')),
                ('product_id', models.IntegerField(verbose_name='\u5bf9\u5e94\u4ea7\u54c1\u7f16\u53f7')),
                ('subject_body', models.TextField(verbose_name='\u6587\u7ae0\u4e3b\u4f53')),
            ],
        ),
        migrations.CreateModel(
            name='article_tags',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.article_info')),
            ],
        ),
        migrations.CreateModel(
            name='categories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menu', models.CharField(max_length=25, verbose_name='\u76ee\u5f55\u540d')),
                ('lang', models.CharField(max_length=25, verbose_name='\u8bed\u8a00')),
                ('priority', models.IntegerField(default=0, verbose_name='\u4f18\u5148\u7ea7')),
            ],
        ),
        migrations.CreateModel(
            name='tags',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_name', models.CharField(max_length=50, verbose_name='Tag\u5173\u952e\u8bcd')),
            ],
        ),
        migrations.AddField(
            model_name='article_tags',
            name='tag_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.tags'),
        ),
        migrations.AddField(
            model_name='article_info',
            name='categories',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.categories'),
        ),
    ]
