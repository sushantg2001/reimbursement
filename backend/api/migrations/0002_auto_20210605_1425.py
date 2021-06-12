# Generated by Django 3.1.7 on 2021-06-05 08:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='entity',
            options={'verbose_name_plural': 'Entities'},
        ),
        migrations.RemoveField(
            model_name='payment',
            name='type',
        ),
        migrations.AddField(
            model_name='payment',
            name='club_id',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='payment',
            name='entity',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.entity'),
        ),
    ]
