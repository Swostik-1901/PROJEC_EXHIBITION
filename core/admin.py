from django.contrib import admin
from .models import (
    Subject, Module, Lecture, Note, Question, HandwrittenNote,
    Company, Eligibility, DSAQuestion, WebDevItem
)


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


class HandwrittenNoteInline(admin.TabularInline):
    model = HandwrittenNote
    extra = 1


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ("name", "order", "done")
    inlines = [ModuleInline]


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ("title", "subject", "order")
    inlines = [LectureInline, NoteInline, QuestionInline, HandwrittenNoteInline]


class EligibilityInline(admin.StackedInline):
    model = Eligibility
    extra = 0


class DSAQuestionInline(admin.TabularInline):
    model = DSAQuestion
    extra = 1


class WebDevItemInline(admin.TabularInline):
    model = WebDevItem
    extra = 1


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name", "order")
    inlines = [EligibilityInline, DSAQuestionInline, WebDevItemInline]