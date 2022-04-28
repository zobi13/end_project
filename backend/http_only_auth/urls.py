from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from movies.views import MovieDetail, MovieList
from movies.views import GenreListCreate, GenreDelete

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('api/account/', include('account.urls')),
    path('api/movies/<int:pk>/', MovieDetail.as_view(), name='detailcreate'),
    path('api/movies/', MovieList.as_view(), name='listcreate'),
    path('api/genres/', GenreListCreate.as_view()),
    path('api/genres/<int:pk>/delete/', GenreDelete.as_view()),
]
