from django.conf import settings
from django.db.models.signals import post_save, post_save
from django.dispatch import receiver
from .models import student
from rest_framework.authtoken.models import Token


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# @receiver(post_save, sender=student)
# def check_club_access(sender, instance, **kwargs):
#     if instance.club_access and instance.club_name != "empty":
#         pass

