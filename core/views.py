from rest_framework import viewsets
from .models import Subject, Company
from .serializers import SubjectSerializer, CompanySerializer


class SubjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Subject.objects.all().order_by("order")
    serializer_class = SubjectSerializer


class CompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Company.objects.all().order_by("order")
    serializer_class = CompanySerializer