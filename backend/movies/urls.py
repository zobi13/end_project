from django.urls import path
from .views import RegisterView, LoadUserView


urlpatterns = [
    path('create', RegisterView.as_view()),
    path('update', LoadUserView.as_view()),
]
