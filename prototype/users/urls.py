from django.conf.urls import patterns, include, url
from users import views

urlpatterns = patterns('',
	url(r'^$', views.index),
	url(r'^login/$', views.user_login),
	url(r'^logout/$', views.user_logout),
	url(r'^register/$', views.user_register),
	url(r'^reg/$', views.reg),
)