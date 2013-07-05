# Create your views here.
from models import News
from django.shortcuts import render_to_response

def home(request):
	news_lists = News.objects.order_by('-news_date')[0:5]
	return render_to_response('index.html', {'news_lists': news_lists})

def index(request):
	news_lists = News.objects.all().order_by("-news_date")
	return render_to_response('news.html', {'news_lists': news_lists})

def news_detail(request, id):
	try:
		news_detail = News.objects.get(pk = id)
	except News.DoesNotExist:
		return render_to_response('news.html')
	return render_to_response('news.html', {'news_detail': news_detail})