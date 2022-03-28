from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from movies.views import MovieList
from movies.views import MovieCreate, MovieDelete, MovieDetail, MovieUpdate

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('api/account/', include('account.urls')),
    path('movies/', MovieList.as_view()),
    path('movies/create/', MovieCreate.as_view()),
    path('movies/<int:pk>/update/', MovieUpdate.as_view()),
    path('movies/<int:pk>/delete/', MovieDelete.as_view()),
    path('movies/<int:pk>/', MovieDetail.as_view()),
]
