from django.urls.conf import include
from .views import student_view_set
from rest_framework.authtoken import views
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('studentapi', viewset=student_view_set, basename='student')

router1 = routers.DefaultRouter()
router1.register('paymentapi', viewset=payment_view_set, basename='payment')

router2 = routers.DefaultRouter()
router2.register('clubapi', viewset=payment_view_set, basename='club')
urlpatterns = [
    path('get_auth_token/', obtain_auth_token),
    path('', include(router.urls)),
    path('', include(router1.urls)),
    path('', include(router2.urls)),
]
