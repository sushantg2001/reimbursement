from re import U
from api.models import User

def run():
    users = User.objects.all()
    print(users.values())