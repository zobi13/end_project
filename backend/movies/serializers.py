from .models import Movie, Genre
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    movies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'movies'] 

class GenreSerializer(serializers.ModelSerializer):
    movies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Genre
        fields = ['id', 'name', 'movies'] 

class MovieSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    genre = serializers.ReadOnlyField(source='genre.name') 

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'cover_image', 'genre', 'user', ]