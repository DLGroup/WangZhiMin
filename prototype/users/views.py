# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from forms import LoginForm, RegisterForm
from models import UserProfile
from django.views.decorators.http import require_http_methods


@login_required(login_url="/user/login")
def index(request):
	return render(request,'user.html')

def user_login(request):
	if request.method == 'POST':
		form = LoginForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user = authenticate(username = username, password = password)
			if user is not None:
				if user.is_active:
					login(request, user)
					return HttpResponseRedirect('/user')
			
			else:
				state = "Invalid user or password"
			return render(request, 'login.html', {'form': form, 'state': state})

	form = LoginForm()	
	return render(request, 'login.html', {'form': form})


def user_logout(request):
	logout(request)
	return HttpResponseRedirect('/user/login')

def user_register(request):
	user_type = request.session.get("user_type", "")
	if request.method == 'POST':
		form = RegisterForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			email = form.cleaned_data.get('email', '')
			password = form.cleaned_data['password']
			region = form.cleaned_data.get('region', '')
			phone = form.cleaned_data.get('phone', '')
			qq = form.cleaned_data.get('qq', '')
			skype = form.cleaned_data.get('skype', '')
			new_user = User.objects.create_user(username, email, password)
			if new_user:
				user_profile = UserProfile(user = new_user, region = region, phone = phone, qq = qq, skype = skype, user_type = user_type)
				user_profile.save()
				login_user = authenticate(username = username, password = password)
				login(request, login_user)
				return HttpResponseRedirect('/user')

	form = RegisterForm()
	if user_type == "student":
		return render(request, 'student_signup.html', {'form': form})
	elif user_type == "coach":
		return render(request, 'coach_signup.html', {'form': form})
	return HttpResponseRedirect('/user/login')

@csrf_exempt
@require_http_methods(["POST"])
def reg(request):
	request.session["user_type"] = request.POST["user_type"]
	return HttpResponse("successful!")