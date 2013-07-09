# Create your views here.
from django.shortcuts import render_to_response

def home(request):
	return render_to_response('user_index.html')

def apply(request):
	return render_to_response('apply.html')

def apply_success(request):
	return render_to_response('apply_success.html')