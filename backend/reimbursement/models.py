from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class payment(models.Model):
    entity = models.ForeignKey(entity,on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    description = models.TextField()

    class statuses(models.TextChoices):
        approved = "Approved"
        pending = "Pending"
        rejected = "Rejected"
    status = models.CharField(
        max_length=10, choices=statuses.choices, default=statuses.pending)


class entity(models.Model):
    user = models.OneToOneField(
        User, related_name='requester', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    class meta:
        abstract = True


