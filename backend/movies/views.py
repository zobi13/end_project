from multiprocessing import get_context
from urllib import request
from movies.models import Genre, Movie
from movies import serializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS, AllowAny
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from rest_framework.viewsets import ModelViewSet
from django.core.paginator import Paginator
from rest_framework.pagination import PageNumberPagination
from .pagination import MoviesListPagination
from movies import pagination


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
    serializer_class = serializers.MovieSerializer
    pagination_class = MoviesListPagination
    queryset = Movie.objects.all()

    def get_queryset(self):
        queryset = Movie.objects.all()
        searchTerm = self.request.query_params.get('title')
        filterTerm = self.request.query_params.get('genre')
        if filterTerm is not None:
            queryset = queryset.filter(genre__exact=filterTerm)
        if searchTerm is not None:
            queryset = queryset.filter(title__contains=searchTerm)
        return queryset


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movie.objects.all()
    serializer_class = serializers.MovieSerializer
