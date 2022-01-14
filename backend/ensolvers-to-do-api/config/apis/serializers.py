from rest_framework import serializers
from todoapi import models


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'sessionid',
            'title',
            'done',
        )
        model = models.Todo