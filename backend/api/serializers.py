
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import payment, custom_user


class payment_serializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = ['email', 'amount', 'description', 'status']


class user_serializer(serializers.ModelSerializer):
    class meta:
        model = custom_user
        fields = ['user', 'club', 'name']
