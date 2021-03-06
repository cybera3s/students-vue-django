from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


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
    # yasg urls
    re_path(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    re_path(
        r"^swagger/$",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    re_path(
        r"^redoc/$", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"
    ),
]
