from django.urls import path
from .views import generate_command

urlpatterns = [
    path('generate_command/', generate_command, name='generate_command'),
]