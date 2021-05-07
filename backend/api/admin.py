from django.contrib import admin
from .models import User, club, payment, student
# Register your models here.
admin.site.register(payment)
admin.site.register(club)
admin.site.register(student)

# class user_inline(admin.TabularInline):
#     model = club.user.through


# class club_admin(admin.ModelAdmin):
#     inlines = [
#         user_inline,
#     ]
#     exclude = ('user',)

# admin.site.register(student)
# admin.site.register(club, club_admin)

