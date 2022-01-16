from django.urls.conf import include
from django.urls import path
from rest_framework import routers
from .views import *
from .auth import *

router = routers.DefaultRouter()
router.register('reimbursement_api', viewset=ReimbursementViewSet, basename='reimbursement')
router.register('club_api', viewset=ClubViewSet, basename='club')
router.register('type_api', viewset=TypeViewSet, basename='type')

router.register('club_request_api', viewset=ClubRequestViewSet, basename='type_request')
router.register('type_request_api', viewset=TypeRequestViewSet, basename='club_request')
router.register('file_api',viewset=FileViewSet, basename='file')
router.register('get_requests', viewset=RequestViewSet, basename='requests')
urlpatterns = [
    path('', include(router.urls)),
    path('user_api/', UserView.as_view()),
    path('login/', login.as_view()),
    path('custom_login/', cookie_login.as_view())
]
