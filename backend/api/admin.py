from django.contrib import admin
from .models import User, club, payment, entity
# Register your models here.
admin.site.register(payment)
admin.site.register(club)
admin.site.register(entity)

