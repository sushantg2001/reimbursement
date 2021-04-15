from backend.api.models import payment
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import payment_serializer,student_serializer, club_serialzer
from .models import payment,student
from rest_framework.permissions import IsAuthenticated

class payment_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = payment.objects.all()
    serializer_class = payment_serializer

class student_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = student.objects.all()
    serializer_class = student_serializer


class club_view_set(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = student.objects.all()
    serializer_class = club_serialzer
