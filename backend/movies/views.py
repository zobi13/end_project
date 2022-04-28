from movies.models import Genre, Movie
from movies import serializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from rest_framework.viewsets import ModelViewSet


class MovieUserPermission(BasePermission):
    message = 'Permission denied'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.user == request.user


class GenreListCreate(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class GenreDelete(generics.DestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class MovieList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [MovieUserPermission]
    queryset = Movie.objects.all()
    serializer_class = serializers.MovieSerializer
