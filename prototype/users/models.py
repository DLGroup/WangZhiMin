from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model):
	user = models.OneToOneField(User)
	user_type = models.CharField(max_length = 60)
	email = models.CharField(max_length = 140, null=True)
	region = models.CharField(max_length = 140, null=True)
	phone = models.CharField(max_length = 140, null=True)
	qq = models.CharField(max_length = 140, null=True)
	skype = models.CharField(max_length = 140, null=True)
