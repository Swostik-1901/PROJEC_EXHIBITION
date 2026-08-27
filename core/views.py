# core/views.py
from rest_framework import viewsets
from .models import Subject
from .serializers import SubjectSerializer


class SubjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Subject.objects.all().order_by("order")
    serializer_class = SubjectSerializer