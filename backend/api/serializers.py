from .models import Student
from rest_framework import serializer


class StudentSerializer(serializer.ModelSerializer):
    class Meta:
        model = Student
        fields = ("name", "age", "field")
