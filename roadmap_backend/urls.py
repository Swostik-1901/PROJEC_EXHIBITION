from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from core.views import SubjectViewSet, CompanyViewSet

router = DefaultRouter()
router.register(r"subjects", SubjectViewSet)
router.register(r"companies", CompanyViewSet)

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)