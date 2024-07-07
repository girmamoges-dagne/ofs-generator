from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mainApp.urls')),  # Include the URLs from mainApp
]
