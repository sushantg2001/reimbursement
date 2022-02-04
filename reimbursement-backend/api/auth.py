from urllib.parse import urlencode
from urllib.request import Request, urlopen

import requests
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.models import User as DjangoUser
from django.contrib.auth.views import LoginView, LogoutView
from django.http.response import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from rest_framework import exceptions, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from .models import APPROVED, Type, TypeRequest, User

student, _ = Type.objects.get_or_create(pk="Student")

class login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        print(username)
        print(password)
        r = requests.post(
            settings.AUTH_URL, data={"username": username, "password": password}
        )
        print(r)
        if r.status_code == 200:
            userData = r.json()["user"]
            print(settings.DEBUG)
            if not settings.DEBUG and not userData["is_verified"]:
                raise exceptions.AuthenticationFailed("User not verified")
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
            token = Token.objects.get_or_create(user=django_user)[0]
            return Response(
                {
                    "token": token.key,
                    "username": user.user.username,
                    "is_admin": user.is_admin,
                }
            )
        else:
            raise exceptions.AuthenticationFailed("No such user")


class cookie_login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        osa_token = request.data.get('osa_token')
        if osa_token:
            r = requests.get(
                settings.CURRENT_USER_URL, headers={"Authorization": "JWT " + osa_token}
            )
            if r.status_code == 200:
                print(r.json())
                userData = r.json()
                print(settings.DEBUG)
                if not (settings.DEBUG or userData["is_verified"]):
                    raise exceptions.AuthenticationFailed("User not verified")
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
                token = Token.objects.get_or_create(user=django_user)[0]
                return Response(
                    {
                        "token": token.key,
                        "username": user.user.username,
                        "is_admin": user.is_admin,
                    }
                )
            else:
                raise exceptions.AuthenticationFailed("No such user")

class CustomLoginView(LoginView):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):

        osa_token = self.request.COOKIES.get('osa_token')

        if osa_token:
            r = requests.get(settings.CURRENT_USER_URL, headers={
                'Authorization': 'JWT ' + osa_token
            })

            if r.status_code == 200:
                userData = r.json()
                if userData['is_verified']:
                    # User exists in main DB

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
                    token = Token.objects.get_or_create(user=django_user)[0]
#                    django_login(request, user)
                    print(Token.objects.get(user = django_user).key)
                    return JsonResponse({
                        "is_admin": user.is_admin,
                        "token" : Token.objects.get(user = django_user).key
                    })

        return super().dispatch(request, *args, **kwargs)