from backend.api.views import student_view_set
from rest_framework.authtoken import views
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('studentapi',viewset=student_view_set,basename='student')

router = routers.DefaultRouter()
router.register('paymentapi', viewset=payment_view_set, basename='payment')

urlpatterns = [
    path('get_auth_token/', obtain_auth_token)
]
