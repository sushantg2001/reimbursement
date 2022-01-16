from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Reimbursement)
admin.site.register(Club)
admin.site.register(User)
admin.site.register(Type)
admin.site.register(File)
admin.site.register(TypeRequest)
admin.site.register(ClubRequest)