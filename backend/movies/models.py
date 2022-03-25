from django.db import models

class Genre(models.Model):
    name=models.CharField(max_length=50)

class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    cover_image = models.CharField(max_length=255)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
