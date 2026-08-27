# core/serializers.py
from rest_framework import serializers
from .models import Subject, Module, Lecture, Note, Question


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ["id", "title", "url"]


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "url", "file"]


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ["id", "title", "url"]


class ModuleSerializer(serializers.ModelSerializer):
    lectures = LectureSerializer(many=True, read_only=True)
    notes = NoteSerializer(many=True, read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Module
        fields = ["id", "title", "order", "lectures", "notes", "questions"]


class SubjectSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Subject
        fields = ["id", "name", "icon", "color", "order", "done", "modules"]