from api.models import Request

def run():
    requests = Request.objects.all()
    print(requests.values())