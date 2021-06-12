
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import club, payment, entity

class club_serialzer(serializers.ModelSerializer):
    class Meta:
        model = club
        fields = '__all__'

class entity_serializer(serializers.ModelSerializer):
    club = club_serialzer(many=True, read_only=True)
    class Meta:
        model = entity
        fields = '__all__'

class payment_serializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = '__all__'
