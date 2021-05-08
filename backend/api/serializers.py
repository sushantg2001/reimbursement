
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import club, payment, student


class payment_serializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = '__all__'


class club_serialzer(serializers.ModelSerializer):
    class Meta:
        model = club
        fields = '__all__'

class student_serializer(serializers.ModelSerializer):
    club = club_serialzer(many=True, read_only=True)
    class Meta:
        model = student
        fields = '__all__'

