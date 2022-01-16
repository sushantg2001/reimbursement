from os import access, stat
from django.db import models
from django.db.models.deletion import DO_NOTHING, SET_NULL
from django.db.models.expressions import F
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User as DjangoUser
from requests.api import delete, options, post, request
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils import timezone

# def send_request_mail(data):
#     send_email(
#         subject= 'New request Created',
#         message = 'you have a new reimbursement'
#         from_email = 'test@gmail.com'
#         reciepient_list = ['admin@gmail.com']
#     )
APPROVED = "Approved"
PENDING = "Pending"
REJECTED = "Rejected"
AVAILABLE_STATUS = [
    (APPROVED, "Approved"),
    (PENDING, "Pending"),
    (REJECTED, "Rejected"),
]


class Club(models.Model):
    name = models.CharField(max_length=100)
    budget = models.PositiveIntegerField(default=0)
    description = models.TextField(null=True, blank=True)
    # approve_budget = models.ManyToManyField(Request)

    class Meta:
        verbose_name_plural = "Clubs"

    def __str__(self) -> str:
        return self.name


class Type(models.Model):
    data = models.CharField(max_length=100, primary_key=True)


class User(models.Model):
    user = models.OneToOneField(
        DjangoUser,
        on_delete=models.CASCADE,
    )
    is_admin = models.BooleanField(default=False)


class Reimbursement(models.Model):
    purpose = models.CharField(max_length=200)
    description = models.TextField()
    status = models.CharField(choices=AVAILABLE_STATUS, max_length=10, default=PENDING)
    name = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, related_name="reimbursements", null=True
    )
    date_time = models.DateTimeField(auto_now_add=True)
    processed_date_time = models.DateTimeField(blank=True, null=True, default=None)
    club = models.ForeignKey(
        Club, on_delete=SET_NULL, null=True, related_name="club", blank=True
    )
    type = models.ForeignKey(
        Type, on_delete=SET_NULL, null=True, related_name="type", default="Student"
    )

    def __str__(self) -> str:
        return self.name


class ClubRequest(models.Model):
    status = models.CharField(choices=AVAILABLE_STATUS, max_length=10, default=PENDING)
    description = models.TextField(null=True, blank=True)
    user = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="club_requests",
    )
    club = models.ForeignKey(
        Club, related_name="requests", blank=True, on_delete=SET_NULL, null=True
    )
    date_time = models.DateTimeField(auto_now_add=True)
    purpose = models.CharField(max_length=200)


class TypeRequest(models.Model):
    status = models.CharField(choices=AVAILABLE_STATUS, max_length=10, default=PENDING)
    description = models.TextField(null=True, blank=True)
    user = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="type_requests",
    )
    type = models.ForeignKey(
        Type, related_name="requests", blank=True, on_delete=SET_NULL, null=True
    )
    date_time = models.DateTimeField(auto_now_add=True)
    purpose = models.CharField(max_length=200)


class File(models.Model):
    def get_path(instance, filename):
        return (
            f"{instance.reimbursement.user.pk}/{instance.reimbursement.pk}/{filename}"
        )

    reimbursement = models.ForeignKey(
        Reimbursement,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="files",
    )
    data = models.FileField(upload_to=get_path, null=True, blank=True)

    def delete(self, *args, **kwargs):
        self.data.delete()
        super().delete(*args, **kwargs)


@receiver(pre_save, sender=Reimbursement)
def auto_now(sender, instance, **kwargs):
    print('testing')
    if instance.pk:
        instance.processed_date_time = timezone.now()
