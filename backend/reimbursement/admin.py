from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from . import models
from django.contrib.auth.models import Permission

admin.site.register(models.payment)
admin.site.register(models.entity)
