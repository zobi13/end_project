# Generated by Django 3.2.5 on 2022-05-18 17:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0017_auto_20220518_1655'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='usersDisiked',
            new_name='usersDisliked',
        ),
    ]
