from django import forms
from django.contrib.auth.models import User

class LoginForm(forms.Form):
	username = forms.CharField(label="Username")
	password = forms.CharField(label="Password", widget=forms.PasswordInput)

class RegisterForm(forms.Form):
	username = forms.CharField(label = "Username")
	password = forms.CharField(max_length = 32, label = "Password", widget = forms.PasswordInput)
	password_confirm = forms.CharField(max_length = 32, label = "Password", widget = forms.PasswordInput)
	email = forms.EmailField(required = False, max_length = 64)
	region = forms.CharField(required = False, max_length = 64)
	phone = forms.CharField(required = False, max_length = 64)
	qq = forms.CharField(required = False, max_length = 64)
    skype = forms.CharField(required = False, max_length = 64)

	def clean_username(self):
		if 'username' in self.cleaned_data:
			try:
				User.objects.get(username = self.cleaned_data['username'])
			except User.DoesNotExist:
				return self.cleaned_data['username']
			raise forms.ValidationError("Username already exist")