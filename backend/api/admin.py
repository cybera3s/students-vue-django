from django.contrib import admin
from .models import Student
from rest_framework.authtoken.admin import TokenAdmin


TokenAdmin.raw_id_fields = ["user"]
admin.site.register(Student)
