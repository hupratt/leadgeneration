from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls'))
]
