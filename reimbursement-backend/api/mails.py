from django.core.mail import send_mail, send_mass_mail
from django.conf import settings

ADMIN_URL = settings.ADMIN_URL
APP_URL = settings.APP_URL
EMAIL_HOST_USER = settings.EMAIL_HOST_USER
ADMIN_EMAIL = "sushant19450@iiitd.ac.in"


def newReimbursementMail(reimbursement):
    subject_user = "Reimbursement Submitted"
    subject_admin = "New Reimbursement"
    message_user = f"You reimbursement has submitted for approval"
    message_admin = f"A new reimbursement has been submitted for approval by {reimbursement.user.user.username}.\n Please visit {ADMIN_URL}"
    email_user = reimbursement.user.user.email
    email_admin = ADMIN_EMAIL
    send_mass_mail(
        (
            (subject_admin, message_admin, EMAIL_HOST_USER, [email_admin]),
            (subject_user, message_user, EMAIL_HOST_USER, [email_user]),
        )
    )
