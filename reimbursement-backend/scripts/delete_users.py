from django.contrib.auth.models import User

def run():
    users = User.objects.all()
    users.delete()