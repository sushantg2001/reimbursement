from typing import Tuple
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404, get_list_or_404
User = get_user_model()

club_names = [("empty", "empty")]+[(f"c{i}", f"club{i}") for i in range(10)]

class club(models.Model):
    name = models.CharField(
        max_length=100, choices=club_names, default="empty")
    budget = models.PositiveIntegerField(default=0)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "Clubs"

    def __str__(self) -> str:
        return self.name


class entity(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    club = models.ManyToManyField(club, blank=True)

    class Meta:
        verbose_name_plural = 'Entities'
    def __str__(self) -> str:
        return self.name


class payment(models.Model):
    name = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    description = models.TextField()
    entity = models.ForeignKey(entity, on_delete=models.SET_NULL,null=True)
    date = models.DateField(auto_now_add=True)
    club_id = models.IntegerField(null=True,blank=True,default=None)

    class statuses(models.TextChoices):
        approved = "Approved"
        pending = "Pending"
        rejected = "Rejected"

    status = models.CharField(
        max_length=10, choices=statuses.choices, default=statuses.pending)


    def __str__(self) -> str:
        return self.name

    def clean(self):
        if self.club_id is None:
            return
        club_for_payment = get_object_or_404(club,id=self.club_id)
        if club_for_payment not in self.club_set.all():
            raise ValidationError(_("You do not have this club access"))
