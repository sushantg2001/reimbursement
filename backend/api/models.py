from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class student(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    club_access = models.BooleanField(default=False)
    class Meta:
        verbose_name_plural = "Students"
        permissions = [
            ("club_access", "Accessing Club Resources")
        ]

    def __str__(self) -> str:
        return self.name


class payment(models.Model):
    amount = models.PositiveIntegerField()
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class purposes(models.TextChoices):
        club = "club"
        student = "student"
    class statuses(models.TextChoices):
        approved = "Approved"
        pending = "Pending"
        rejected = "Rejected"
    status = models.CharField(
        max_length=10, choices=statuses.choices, default=statuses.pending)
    type = models.CharField(
        max_length=10, choices=purposes.choices)


class club(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    budget = models.PositiveIntegerField(default=0)
    class Meta:
        verbose_name_plural = "Clubs"
    def __str__(self) -> str:
        return self.name