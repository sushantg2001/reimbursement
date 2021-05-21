from django.http import request
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import payment_serializer, entity_serializer, club_serialzer
from .models import payment, entity, club, club_names
from rest_framework.permissions import IsAuthenticated, BasePermission

class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        boolean = obj.user == request.user
        return boolean


class Isentity(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.entity.user == request.user

class payment_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = payment_serializer

    def get_queryset(self):
        current_entity = entity.objects.get(user=self.request.user)
        payments = payment.objects.all().filter(entity = current_entity)
        return payments


class entity_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = entity_serializer

    def get_queryset(self):
        entitys = entity.objects.all().filter(user=self.request.user)
        return entitys


class club_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = club_serialzer

    def get_queryset(self):
        clubs = club.objects.all()
        return clubs
