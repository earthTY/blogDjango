"""blogDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from blog import views
from blog.admin_system import manager_view
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = []

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    url(r'^upload_img$',manager_view.upload_img),

    url(r'^upload_img_edit',manager_view.upload_img_edit),

    url(r'^manager/(?P<page>[^/]*)$', manager_view.manager_view, name='manager'),

    url(r'^manager/(?P<page>[^/]*)/(?P<sp>[^/]*)$', manager_view.managerS_view, name='managerS_view'),

    url(r'^bs/get_tags_by_lang$',manager_view.get_tags_by_lang),

    url(r'^bs/get_menu_products$',manager_view.get_menu_products),

    url(r'^bs/get_menu_by_lang$',manager_view.get_menu_by_lang),

    url(r'^bs/create_menu$',manager_view.create_menu),

    url(r'^bs/create_tag$',manager_view.create_tag),

    url(r'^bs/create_article_info$',manager_view.create_article_info),

    url(r'^get_product_by_menu_name$',views.get_product_by_menu_name),

    url(r'^get_main_page_articles$',views.get_main_page_articles),

    url(r'^(|)([\w|-]+)(|/\d+)$',views.show_menu_page),

    url(r'^(|)[\w|-]+\.html$',views.show_simple_page),

    url(r'^(|)products/([\w|-]+)$', views.show_article),

    url(r'^(|)articles/([\w|-]+)$',views.show_article),

    url(r'^(|)',views.show_main_page),

    url(r'^admin/', admin.site.urls),
]
