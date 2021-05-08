from django.http import request
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import payment_serializer, student_serializer, club_serialzer
from .models import payment, student, club, club_names
from rest_framework.permissions import IsAuthenticated, BasePermission

class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        boolean = obj.user == request.user
        return boolean


class IsStudent(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.student.user == request.user

class payment_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = payment_serializer

    def get_queryset(self):
        current_student = student.objects.get(user=self.request.user)
        payments = payment.objects.all().filter(student = current_student)
        return payments


class student_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    serializer_class = student_serializer

    def get_queryset(self):
        students = student.objects.all().filter(user=self.request.user)
        return students


class club_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = club_serialzer

    def get_queryset(self):
        clubs = club.objects.all()
        return clubs
