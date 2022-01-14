from django.http import JsonResponse

from todoapi import models
from .serializers import TodoSerializer

def my_view(request):
    if (request.method=="POST"):
        print('hola')
        if not request.session.session_key:
            request.session.save()
        models.Todo.create(
            id=request.POST.id,
            title=request.POST.title,
            done=request.POST.done,
            sessionid=request.session.session_key)
        return JsonResponse('hola')
    elif (request.method=="GET"):
        if not request.session.session_key:
            request.session.save()
        userNotes = models.Todo.objects.filter(sessionid=request.session.session_key).values()
        return JsonResponse(list(userNotes), safe=False)