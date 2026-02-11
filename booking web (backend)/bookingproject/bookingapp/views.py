from django.shortcuts import render, redirect
from .models import Booking
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET", "POST"])
def submit_booking(request):
    if request.method == "POST":
        full_name = request.POST.get("full_name", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        location = request.POST.get("location", "").strip()
        shoot_list = request.POST.getlist("shoot_type")
        shoot_string = ",".join(shoot_list)

        Booking.objects.create(
            full_name=full_name,
            email=email,
            phone=phone,
            location=location,
            shoot_type=shoot_string
        )

        return redirect('success')  # redirect to success URL

    return render(request, "bookingapp/booking.html")

def success_page(request):
    return render(request, "bookingapp/success.html")


