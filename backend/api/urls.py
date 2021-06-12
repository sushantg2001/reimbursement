from django.urls.conf import include
from .views import entity_view_set
from rest_framework.authtoken import views
from django.urls import path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('entityapi', viewset=entity_view_set, basename='entity')

router1 = routers.DefaultRouter()
router1.register('paymentapi', viewset=payment_view_set, basename='payment')

router2 = routers.DefaultRouter()
router2.register('clubapi', viewset=club_view_set, basename='club')
urlpatterns = [
    path('', include(router.urls)),
    path('', include(router1.urls)),
    path('', include(router2.urls)),
]
