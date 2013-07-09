from django.conf.urls import patterns, include, url
from administrator import views

urlpatterns = patterns('', 
  url(r'^$', views.index),
  url(r'^login/$', views.login),
  url(r'^home/$', views.home),
)
