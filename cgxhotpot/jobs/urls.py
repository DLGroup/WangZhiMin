from django.conf.urls import patterns, include, url
from jobs import views

urlpatterns = patterns('',
	url(r'^$', views.index),
	url(r'^(?P<id>\d+)/$', views.jobs_detail), 
)