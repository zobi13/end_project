from django.db import models
from django.contrib.auth.models import User


class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    cover_image = models.TextField(max_length=1500)
    genre = models.ManyToManyField(Genre)
    likes = models.IntegerField(blank=True, default=0)
    dislikes = models.IntegerField(blank=True, default=0)
    usersLiked = models.ManyToManyField(
        User, related_name='users_liked_movie', blank=True)
    usersDisliked = models.ManyToManyField(
        User, related_name='users_disliked_movie', blank=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField()
