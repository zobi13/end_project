from django.urls import path
from .views import RegisterView, LoadUserView, LogoutView


urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('user/', LoadUserView.as_view()),
]
