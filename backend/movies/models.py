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

    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField()
