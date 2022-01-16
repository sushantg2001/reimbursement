from re import T
from typing_extensions import Required
from django.db import models
from django.db.models import fields
from django.db.models.fields.related import RelatedField
from django.http.request import validate_host
from requests.api import request
from requests.sessions import Request
from rest_framework.decorators import parser_classes
from rest_framework.fields import ListField, SerializerMethodField
from rest_framework.relations import PrimaryKeyRelatedField, SlugRelatedField
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import *
from django.contrib.auth.models import User as DjangoUser
from drf_writable_nested.serializers import WritableNestedModelSerializer


class ApprovedClubs(serializers.RelatedField):
    def to_representation(self, value):
        if value.status == APPROVED:
            return f"{value.club.name},{value.club.budget}"


class ApprovedTypes(serializers.RelatedField):
    def to_representation(self, value):
        if value.status == APPROVED:
            return value.type.data


class FileSerializer(serializers.ModelSerializer):
    data = serializers.FileField(required=False)

    class Meta:
        model = File
        exclude = ["id"]


class ReducedFileSerializer(serializers.ModelSerializer):
    data = serializers.FileField(required=False)

    class Meta:
        model = File
        exclude = ["id", "reimbursement"]


class DjangoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoUser
        fields = ["username", "first_name", "last_name", "email"]


class TypeRequestSerializer(serializers.ModelSerializer):
    def get_date(self, obj):
        return obj.date_time.date().strftime("%d/%m/%Y")

    date = serializers.SerializerMethodField(method_name="get_date")

    class Meta:
        model = TypeRequest
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.get(user=self.context["request"].user)
        instance = TypeRequest.objects.create(user=user, **validated_data)
        return instance


class ClubRequestSerializer(serializers.ModelSerializer):
    def get_date(self, obj):
        return obj.date_time.date().strftime("%m/%d/%Y")

    club = SlugRelatedField(slug_field="name", queryset=Club.objects.all())
    date = serializers.SerializerMethodField(method_name="get_date")

    class Meta:
        model = ClubRequest
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.get(user=self.context["request"].user)
        instance = ClubRequest.objects.create(user=user, **validated_data)
        return instance


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = "__all__"


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    user = DjangoUserSerializer(read_only=True)
    club_requests = ApprovedClubs(read_only=True, many=True)
    type_requests = ApprovedTypes(read_only=True, many=True)

    class Meta:
        model = User
        fields = ["user", "club_requests", "type_requests"]


class ReimbursementSerializer(serializers.ModelSerializer):
    def get_date(self, obj):
        return obj.date_time.date().strftime("%m/%d/%Y")

    def get_processed_date(self, obj):
        if not obj.processed_date_time:
            return ""
        return obj.processed_date_time.date().strftime("%m/%d/%Y")

    date = serializers.SerializerMethodField(method_name="get_date")
    processed = serializers.SerializerMethodField(method_name="get_processed_date")
    files = ReducedFileSerializer(many=True, required=False)
    club = SlugRelatedField(
        slug_field="name", queryset=Club.objects.all(), required=False
    )

    def create(self, validated_data):
        request = self.context.get("request")
        validated_data["user"] = User.objects.get(user=request.user)
        instance = Reimbursement.objects.create(**validated_data)
        files = request.FILES
        if files:
            for f in files.getlist("files"):
                instance.files.create(data=f)
        return instance

    def get_username(self, obj):
        return obj.user.user.username

    username = serializers.SerializerMethodField()

    class Meta:
        exclude = ["user"]
        model = Reimbursement
        extra_kwargs = {
            "user": {"required": False},
        }

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
