# Create your views here.
from django.shortcuts import render_to_response
from models import Jobs 

def index(request):
	jobs_lists = Jobs.objects.all().order_by('-jobs_deadline')
	return render_to_response('jobs.html', {'jobs_lists': jobs_lists})

def jobs_detail(request, id):
	try:
		jobs_detail = Jobs.objects.get(pk = id)
	except Jobs.DoesNotExist:
		return render_to_response('jobs.html')
	return render_to_response('jobs.html', {'jobs_detail': jobs_detail})
