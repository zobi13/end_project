from .models import Movie, Genre
from rest_framework import serializers
from django.contrib.auth.models import User


class GenreSerializer(serializers.ModelSerializer):
    # movies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = ['id', 'name', ]


class MovieSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='user.id')
    # genre = serializers.ReadOnlyField(source='genre.name')

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description',
                  'cover_image', 'genre', 'likes', 'dislikes', 'users']
