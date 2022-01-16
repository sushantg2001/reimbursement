from rest_framework.authtoken.views import ObtainAuthToken
import requests
from django.conf import settings
from django.contrib.auth.models import User as DjangoUser
from rest_framework import exceptions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import APPROVED, User, TypeRequest, Type
from django.contrib.auth import authenticate

student = Type.objects.get(pk="Student")
club = Type.objects.get(pk="Club")


class login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        r = requests.post(
            settings.AUTH_URL, data={"username": username, "password": password}
        )
        print(r)
        if r.status_code == 200:
            userData = r.json()["user"]
            if not settings.DEBUG or userData["is_verified"]:
                return None
            first_name = userData["first_name"]
            last_name = userData["last_name"]
            django_user = DjangoUser.objects.get_or_create(
                username=userData["username_osa"]
            )[0]
            django_user.first_name = first_name
            django_user.last_name = last_name
            django_user.email = userData["username_osa"]
            user = User.objects.get_or_create(user=django_user)[0]
            student_request, _ = TypeRequest.objects.get_or_create(user=user, type=student)
            student_request.status = APPROVED
            student_request.type = student
            student_request.save()
            club_request, _ = TypeRequest.objects.get_or_create(user=user, type=club)
            club_request.status = APPROVED
            club_request.type = club
            club_request.save()
        else:
            raise exceptions.AuthenticationFailed("No such user")

        token = Token.objects.get_or_create(user=django_user)[0]
        return Response(
            {
                "token": token.key,
                "username": user.user.username,
                "is_admin": user.is_admin,
            }
        )


class cookie_login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        osa_token = self.request.COOKIES.get("osa_token")
        if osa_token:
            r = requests.get(
                settings.CURRENT_USER_URL, headers={"Authorization": "JWT " + osa_token}
            )
        print(r)
        if r.status_code == 200:
            userData = r.json()["user"]
            if not settings.DEBUG or userData["is_verified"]:
                raise exceptions.AuthenticationFailed("Your account is not verified")
            print(userData)
            first_name = userData["first_name"]
            last_name = userData["last_name"]
            django_user = DjangoUser.objects.get_or_create(
                username=userData["username_osa"]
            )[0]
            django_user.first_name = first_name
            django_user.last_name = last_name
            django_user.email = userData["username_osa"]
            user = User.objects.get_or_create(user=django_user)[0]
            student_request, _ = TypeRequest.objects.get_or_create(user=user, type=student)
            student_request.status = APPROVED
            student_request.type = student
            student_request.save()
            club_request, _ = TypeRequest.objects.get_or_create(user=user, type=club)
            club_request.status = APPROVED
            club_request.type = club
            club_request.save()
        else:
            raise exceptions.AuthenticationFailed("No such user")

        token = Token.objects.get_or_create(user=django_user)[0]
        return Response(
            {
                "token": token.key,
                "username": user.user.username,
                "is_admin": user.is_admin,
            }
        )
