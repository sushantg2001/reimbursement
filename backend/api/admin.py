from django.contrib import admin
from .models import club,payment,student
# Register your models here.
admin.site.register(club)
admin.site.register(student)
admin.site.register(payment)
