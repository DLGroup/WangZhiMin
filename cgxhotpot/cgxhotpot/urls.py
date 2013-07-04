from django.conf.urls import patterns, include, url
# from django.views.generic import TemplateView
import settings
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cgxhotpot.views.home', name='home'),
    # url(r'^cgxhotpot/', include('cgxhotpot.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # url(r'^$', TemplateView.as_view(template_name = 'index.html')),
    url(r'^$', 'news.views.home'),

    # news url
    url(r'^news/', include('news.urls')),

    # path to css/js files:
    url(r'^src/(.*)$', 'django.views.static.serve', {'document_root': settings.BASE_DIR + '/src/'}),
    # url to admin static files, for deploying to server:
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
)
