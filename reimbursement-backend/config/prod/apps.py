INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# External
INSTALLED_APPS += [
    'whitenoise.runserver_nostatic',
    'rest_framework',
    'django_extensions',
    'rest_framework.authtoken',
    'corsheaders',
    'django_cleanup.apps.CleanupConfig',
    "drf_multiple_model"
]

# Internal
INSTALLED_APPS += [
    'api',
]

