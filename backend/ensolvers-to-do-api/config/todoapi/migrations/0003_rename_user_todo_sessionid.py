# Generated by Django 3.2.11 on 2022-01-13 19:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapi', '0002_rename_sessionid_todo_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='user',
            new_name='sessionid',
        ),
    ]
