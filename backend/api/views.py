from django.http import request
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .serializers import payment_serializer, entity_serializer, club_serialzer
from .models import payment, entity, club, club_names
from rest_framework.permissions import IsAuthenticated, BasePermission
from django.contrib.auth.models import User
from rest_framework import exceptions
from rest_framework import authentication
import requests
from django.contrib.auth.models import User


class OsaAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        username = request.GET.get('username')
        password = request.GET.get('password')
        r = requests.post('localhost:8001/token-auth/',
                          data={'username': username, 'password': password})

        if r.status_code == 200:
            userData = r.json()['user']
            if not userData['is_verified']:
                return None
            username_osa = userData['username_osa']
            username_retreived = userData['username']
            first_name = userData['first_name']
            last_name = userData['last_name']
            try:
                user = User.objects.get(username_osa=username_osa)
                user.first_name = first_name
                user.last_name = last_name
                user.last_name = last_name
                user.email = username_retreived
                user.username = username_retreived
                user.save()
            except User.DoesNotExist:
                user = User.objects.create(
                    username=username_retreived,
                    username_osa=username_osa,
                    password=password,
                    email=username_retreived,
                    first_name=first_name,
                    last_name=last_name,
                    is_customer=True,
                )
                entity.objects.create(user=user)
            return (user, None)
        raise exceptions.AuthenticationFailed('No such user')

class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        boolean = obj.user == request.user
        return boolean


class Isentity(BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.entity.user == request.user

class payment_view_set(viewsets.ModelViewSet):
    # authentication = [OsaAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = payment_serializer

    def get_queryset(self):
        current_entity = entity.objects.get(user=self.request.user)
        payments = payment.objects.all().filter(entity = current_entity)
        return payments


class entity_view_set(viewsets.ModelViewSet):
    # authentication = [OsaAuthentication]
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = entity_serializer

    def get_queryset(self):
        entitys = entity.objects.all().filter(user=self.request.user)
        return entitys


class club_view_set(viewsets.ModelViewSet):
    # authentication = [OsaAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = club_serialzer

    def get_queryset(self):
        clubs = club.objects.all()
        return clubs
