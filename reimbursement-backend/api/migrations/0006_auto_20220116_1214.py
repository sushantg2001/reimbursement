# Generated by Django 3.1.7 on 2022-01-16 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20220116_1213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reimbursement',
            name='processed_date_time',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='typerequest',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
