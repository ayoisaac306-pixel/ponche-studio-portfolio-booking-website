from django.urls import path
from .views import submit_booking, success_page

urlpatterns = [
    path('submit-booking/', submit_booking, name='submit-booking'),
    path('success/', success_page, name='success'),
]
