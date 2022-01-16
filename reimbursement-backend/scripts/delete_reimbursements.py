from api.models import *

def run():
    reimbursements = Reimbursement.objects.all()
    reimbursements.delete()