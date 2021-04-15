
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import club, payment, custom_user, student


class payment_serializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = ['email', 'amount', 'description', 'status']


class student_serializer(serializers.ModelSerializer):
    class meta:
        model = student
        fields = ['user', 'club_access', 'name']

class club_serialzer(serializers.ModelSerializer):
    class meta:
        model = club
        fields = ['user', 'club_access', 'name']
