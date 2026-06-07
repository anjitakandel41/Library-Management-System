from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import redirect, render


def home(request):
    return render(request, "portfolio/index.html")


def submit_form(request):
    if request.method != "POST":
        return redirect("home")

    name = request.POST.get("name", "").strip()
    email = request.POST.get("email", "").strip()
    message = request.POST.get("message", "").strip()

    if not name or not email or not message:
        return HttpResponse("Please fill in all contact form fields.")

    subject = "New Contact Form Submission"
    body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

    try:
        send_mail(subject, body, email, ["Surajkdl111@gmail.com"], fail_silently=False)
        return HttpResponse("Message sent successfully!")
    except Exception:
        return HttpResponse("Error occurred while sending email.")
