# Generated by Django 3.2.5 on 2022-05-18 17:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('movies', '0018_rename_usersdisiked_movie_usersdisliked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='usersDisliked',
            field=models.ManyToManyField(blank=True, related_name='users_disliked_movie', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='movie',
            name='usersLiked',
            field=models.ManyToManyField(blank=True, related_name='users_liked_movie', to=settings.AUTH_USER_MODEL),
        ),
    ]
