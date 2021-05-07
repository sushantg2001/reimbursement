
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import club, payment, student


class payment_serializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = '__all__'


class student_serializer(serializers.ModelSerializer):
    class Meta:
        model = student
        fields = '__all__'


class club_serialzer(serializers.ModelSerializer):
    class Meta:
        model = club
        fields = '__all__'
