from django.contrib.auth import authenticate
from django.http import request
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .serializers import payment_serializer, entity_serializer, club_serialzer
from .models import payment, entity, club
from rest_framework.permissions import IsAuthenticated, BasePermission
from django.contrib.auth.models import User
from rest_framework import exceptions
from rest_framework.authentication import TokenAuthentication, BaseAuthentication
import requests
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate
class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        boolean = obj.user == request.user
        return boolean


class Isentity(BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.entity.user == request.user

class payment_view_set(viewsets.ModelViewSet):
    authentication = [TokenAuthentication]
    permission_classes = [IsAuthenticated, TokenAuthentication]
    serializer_class = payment_serializer

    def get_queryset(self):
        current_entity = entity.objects.get(user=self.request.user)
        payments = payment.objects.all().filter(entity = current_entity)
        return payments


class entity_view_set(viewsets.ModelViewSet):
    authentication = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = entity_serializer

    def get_queryset(self):
        entitys = entity.objects.all().filter(user=self.request.user)
        return entitys


class club_view_set(viewsets.ModelViewSet):
    authentication = [TokenAuthentication]
    permission_classes = [IsAuthenticated, TokenAuthentication]
    serializer_class = club_serialzer

    def get_queryset(self):
        clubs = club.objects.all()
        return clubs


class login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        print("here")
        print(request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
        r = requests.post('http://localhost:8001/token-auth/',
                          data={'username': username, 'password': password})
        print(r)
        if r.status_code == 200:
            userData = r.json()['user']
            if not userData['is_verified']:
                return None
            username = userData['username_osa']
            first_name = userData['first_name']
            last_name = userData['last_name']
            try:
                user = User.objects.get(username=username)
                user.first_name = first_name
                user.last_name = last_name
                user.username = username
                user.save()
            except User.DoesNotExist:
                user = User.objects.create_user(
                    username=username,
                    password=password,
                    first_name=first_name,
                    last_name=last_name,
                )
                entity.objects.create(user=user)
        else:
            raise exceptions.AuthenticationFailed('No such user')

        print(username,password)
        user = authenticate(username=username, password=password)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username':user.username
        })
