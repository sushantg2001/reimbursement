from django.shortcuts import render
from rest_framework import viewsets
from .serializers import payment_serializer, student_serializer, club_serialzer
from .models import payment, student, club, club_names
from rest_framework.permissions import IsAuthenticated, BasePermission


class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        boolean = obj.user == request.user
        return boolean


class payment_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = payment_serializer

    def get_queryset(self):
        user = self.request.user
        payments = payment.objects.filter(user=user)
        # payments = payment.objects.all()
        return payments


class student_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = student_serializer

    def get_queryset(self):
        user = self.request.user
        students = student.objects.all().filter(user=user)
        # students = student.objects.all()
        return students


class club_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = club_serialzer

    def get_queryset(self):
        user = self.request.user
        # clubs = club.objects.filter(user=user)
        clubs = club.objects.all().filter(user=user)
        return clubs
