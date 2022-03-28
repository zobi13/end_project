from django.db import models
from django.contrib.auth.models import User

class Genre(models.Model):
    name=models.CharField(max_length=50)

class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    cover_image = models.ImageField(upload_to='movies/')
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
