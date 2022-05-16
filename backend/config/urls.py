from django.contrib import admin
from django.urls import path, include, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(
        title="Students API",
        default_version="v1",
        description="Here is all our endpoints",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="cybera.3s@gmail.com"),
        license=openapi.License(name="GPLv3 License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    # djoser urls
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.authtoken")),
]
