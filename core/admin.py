# core/admin.py
from django.contrib import admin
from .models import Subject, Module, Lecture, Note, Question


class ModuleInline(admin.TabularInline):
    model = Module
    extra = 1


class LectureInline(admin.TabularInline):
    model = Lecture
    extra = 1


class NoteInline(admin.TabularInline):
    model = Note
    extra = 1


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ("name", "order", "done")
    inlines = [ModuleInline]


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "order")
    inlines = [LectureInline, NoteInline, QuestionInline]