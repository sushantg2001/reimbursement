from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import payment,entity

class paymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = ['email', 'amount', 'description', 'status']

class entitySerializer(serializers.ModelSerializer):
    class meta:
        model = entity
        fields = ['user','club']