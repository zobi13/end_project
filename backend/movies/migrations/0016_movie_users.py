# Generated by Django 3.2.5 on 2022-05-17 15:50

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('movies', '0015_remove_movie_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
