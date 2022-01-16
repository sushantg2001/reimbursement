from api.models import *
from api.serializers import *
def run():
    user = User.objects.get(pk=2)
    # # print(user.values())
    # user_serializer = UserSerializer(user)
    # print(user.type_requests.all().values())
    # print(user_serializer.data)
    print(ReimbursementSerializer())