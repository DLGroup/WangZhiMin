from django.conf.urls import patterns, include, url
import settings
from django.views.generic import TemplateView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cqu.views.home', name='home'),
    # url(r'^cqu/', include('cqu.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

    url(r'^$', TemplateView.as_view(template_name = 'index.html')),

    # User's url
    url(r'^user/', include('users.urls')),

    # Admin's url
    url(r'^admin/', include('administrator.urls')),

    # Image/JS/CSS files' location
    url(r'^src/(.*)$', 'django.views.static.serve', {'document_root': settings.BASE_DIR + '/src/'}),
)
