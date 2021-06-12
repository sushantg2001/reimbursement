from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('get_auth_token/', include('rest_framework.urls')),
]
