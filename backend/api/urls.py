from rest_framework.authtoken import views
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('get_auth_token/', obtain_auth_token)
]
