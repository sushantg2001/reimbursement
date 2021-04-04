from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.urls import include
urlpatterns = [
    path('payment/', views.paymentList.as_view()),
    path('payment/<int:pk>/', views.paymentDetail.as_view()),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
]
