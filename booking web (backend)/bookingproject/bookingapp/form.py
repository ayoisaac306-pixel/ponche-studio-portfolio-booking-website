from django import forms
from .models import Booking

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        # Only include fields that exist in your HTML
        fields = ["full_name", "email", "location", "phone", "shoot_type"]
