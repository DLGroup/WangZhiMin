from django.db import models

# Create your models here.
class Jobs(models.Model):
	jobs_name = models.CharField(max_length = 64)
	jobs_deadline = models.DateField()
	jobs_description = models.TextField()
	jobs_salary = models.CharField(max_length = 64)
	jobs_number = models.CharField(max_length = 64)
	jobs_requirement = models.TextField()
	jobs_contact = models.CharField(max_length = 64)

	def __unicode__(self):
		return self.jobs_name
