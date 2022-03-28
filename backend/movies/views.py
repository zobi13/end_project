from movies.models import Movie
from movies import serializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.views.generic.edit import CreateView, UpdateView, DeleteView


class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = serializers.MovieSerializer

class MovieDetail(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = Movie

class MovieCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movie.objects.all()
    serializer_class = serializers.MovieSerializer

class MovieUpdate(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movie.objects.all()
    serializer_class = Movie

class MovieDelete(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movie.objects.all()
    serializer_class = Movie