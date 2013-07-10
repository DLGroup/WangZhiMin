from django.conf.urls import patterns, include, url
from users import views

urlpatterns = patterns('',
	url(r'^$', views.home),
	url(r'^apply/$', views.apply),
	url(r'^apply_success/$', views.apply_success),
	url(r'^check/$', views.check),
	url(r'^profile/$', views.edit_profile)
)