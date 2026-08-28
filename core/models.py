# core/models.py
from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, default="tree")  # matches your ICONS keys in script.js
    color = models.CharField(max_length=7, default="#E3A857")  # hex color
    order = models.PositiveIntegerField(default=0)  # controls position on the trail
    done = models.BooleanField(default=False)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name


class Module(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="modules")
    title = models.CharField(max_length=150)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.subject.name} - {self.title}"


class Lecture(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="lectures")
    title = models.CharField(max_length=200)
    url = models.URLField()  # YouTube / Drive link

    def __str__(self):
        return self.title


class Note(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="notes")
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)          # option 1: link to Drive etc.
    file = models.FileField(upload_to="notes/", blank=True, null=True)  # option 2: direct upload

    def __str__(self):
        return self.title


class Question(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="questions")
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class HandwrittenNote(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="handwritten_notes")
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)
    file = models.FileField(upload_to="handwritten/", blank=True, null=True)

    def __str__(self):
        return self.title