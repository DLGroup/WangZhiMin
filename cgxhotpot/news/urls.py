from django.conf.urls import patterns, include, url
from news import views

urlpatterns = patterns('',
	url(r'^$', views.index),
	url(r'^(?P<id>\d+)/$', views.news_detail),
)