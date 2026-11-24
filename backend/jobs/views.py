from django.http import JsonResponse
from .models import Job

def job_list(request):
    jobs = Job.objects.all().values()
    return JsonResponse(list(jobs), safe=False)