from django.http import JsonResponse
import json

from todoapi import models
from .serializers import TodoSerializer

def my_view(request):
    if (request.method=="POST"):
        postBody = json.loads(request.body.decode('utf-8'))
        if not request.session.session_key:
            request.session.save()
        taskTitle = postBody.get('title')
        taskDone = postBody.get('done')
        newTask = models.Todo.objects.create(title=taskTitle, done=taskDone, sessionid=request.session.session_key)
        #newTask.save()
        return JsonResponse('hola', safe=False)
    elif (request.method=="GET"):
        if not request.session.session_key:
            request.session.save()
        #no funciona pero es la manera correcta
        #userNotes = models.Todo.objects.filter(sessionid=request.session.session_key).values()
        userNotes = models.Todo.objects.values()
        print(list(userNotes))
        return JsonResponse(list(userNotes), safe=False)
