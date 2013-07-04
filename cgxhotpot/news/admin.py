from django.contrib import admin
from news.models import News 
class NewsAdmin(admin.ModelAdmin):
	list_display = ('news_title', 'news_date')
	list_filter = ('news_date',)
admin.site.register(News, NewsAdmin)
