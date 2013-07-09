# Create your views here.
from django.shortcuts import render_to_response, redirect
def index(request):
	return redirect('/admin/login/')

def login(request):
	return render_to_response('admin_login.html')

def home(request):
	return render_to_response('admin_home.html')

