from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

club_names = [("empty", "empty")]+[(f"c{i}", f"club{i}") for i in range(10)]


class student(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    club_access = models.BooleanField(default=False)
    club_name = models.CharField(
        max_length=100, choices=club_names, default="empty")

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
    user = models.ManyToManyField(User)
    name = models.CharField(
        max_length=100, choices=club_names, default="empty")
    budget = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Clubs"

    def __str__(self) -> str:
        return self.name
