from django.db import models

# Create your models here.

class Booking(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, null=True, blank=True)
    location = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    date = models.DateField(blank=True)
    SHOOT_TYPES = [
        ("wedding", "Wedding"),
        ("lifestyle", "Lifestyle"),
        ("other", "Other Shoot"),
    ]
    shoot_type = models.CharField(max_length=20, choices=SHOOT_TYPES)

    def __str__(self):
        return f'{self.full_name} | {self.date} | {self.shoot_type}'
