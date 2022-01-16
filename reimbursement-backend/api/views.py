from django.contrib.auth import authenticate
from requests.api import request
from requests.sessions import Request
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.decorators import parser_classes, permission_classes
from .serializers import *
from .models import *
from django.contrib.auth.models import User as DjangoUser
from rest_framework.permissions import (
    SAFE_METHODS,
    IsAdminUser,
    IsAuthenticated,
    BasePermission,
)
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from django.contrib.auth import authenticate
from rest_framework.parsers import MultiPartParser, JSONParser
from api.mails import *
from drf_multiple_model.viewsets import ObjectMultipleModelAPIViewSet
from rest_framework import generics
from rest_framework import mixins


def get_user(request):
    django_user = request.user
    user = User.objects.get(user=django_user)
    return user


class BearerAuthentication(TokenAuthentication):
    keyword = "Bearer"


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        user = get_user(request)
        return user.is_admin

class IsAdminOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        user = get_user(request)
        return user.is_admin

class IsAdminOrPost(permissions.BasePermission):
    def has_permission(self, request, view):
        print(request.method)
        if request.method in SAFE_METHODS or request.method == "POST":
            return True
        user = get_user(request)
        return user.is_admin


class ReimbursementViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrPost]
    serializer_class = ReimbursementSerializer
    parser_classes = (MultiPartParser, JSONParser)

    def get_queryset(self):
        user = get_user(self.request)
        if user.is_admin:
            return Reimbursement.objects.all()
        return Reimbursement.objects.all().filter(user=user)

    def perform_create(self, serializer):
        instance = serializer.save()
        # newReimbursementMail(instance)


class ClubViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdmin]
    serializer_class = ClubSerializer

    def get_queryset(self):
        user = get_user(self.request)
        return Club.objects.all()


class TypeViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdmin]
    serializer_class = TypeSerializer

    def get_queryset(self):
        return Type.objects.all()


class UserView(generics.ListAPIView):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        user = get_user(self.request)
        if user.is_admin:
            return User.objects.all()
        return User.objects.all().filter(user=self.request.user)

class TypeRequestViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrPost]
    serializer_class = TypeRequestSerializer

    def get_queryset(self):
        user = get_user(self.request)
        if user.is_admin:
            return TypeRequest.objects.all()
        return TypeRequest.objects.all().filter(user=user)


class ClubRequestViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrPost]
    serializer_class = ClubRequestSerializer

    def get_queryset(self):
        user = get_user(self.request)
        if user.is_admin:
            return ClubRequest.objects.all()
        return ClubRequest.objects.all().filter(user=user)


class FileViewSet(viewsets.ModelViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = FileSerializer

    def get_queryset(self):
        return File.objects.all()


class RequestViewSet(ObjectMultipleModelAPIViewSet):
    authentication_classes = [BearerAuthentication]
    permission_classes = [IsAuthenticated, IsAdmin]
    querylist = [
        {
            "queryset": TypeRequest.objects.all(),
            "serializer_class": TypeRequestSerializer,
        },
        {
            "queryset": ClubRequest.objects.all(),
            "serializer_class": ClubRequestSerializer,
        },
    ]
