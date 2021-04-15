# Generated by Django 3.1.6 on 2021-04-10 10:31

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='custom_user',
            new_name='student',
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'permissions': [('club_access', 'Accessing Club Resources')], 'verbose_name_plural': 'Students'},
        ),
    ]
