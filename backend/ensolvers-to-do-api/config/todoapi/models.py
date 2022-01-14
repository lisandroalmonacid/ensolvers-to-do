from django.db import models

class Todo(models.Model):
    sessionid = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    done = models.BooleanField()

    def __str__(self):
        return self.title
