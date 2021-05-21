from django.contrib import admin
from .models import User, club, payment, entity
# Register your models here.
admin.site.register(payment)
admin.site.register(club)
admin.site.register(entity)

# class user_inline(admin.TabularInline):
#     model = club.user.through


# class club_admin(admin.ModelAdmin):
#     inlines = [
#         user_inline,
#     ]
#     exclude = ('user',)

# admin.site.register(entity)
# admin.site.register(club, club_admin)

