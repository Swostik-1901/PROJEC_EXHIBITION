from rest_framework import serializers
from .models import (
    Subject, Module, Lecture, Note, Question, HandwrittenNote,
    Company, Eligibility, DSAQuestion, WebDevItem
)


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


class HandwrittenNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = HandwrittenNote
        fields = ["id", "title", "url", "file"]


class ModuleSerializer(serializers.ModelSerializer):
    lectures = LectureSerializer(many=True, read_only=True)
    notes = NoteSerializer(many=True, read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)
    handwritten_notes = HandwrittenNoteSerializer(many=True, read_only=True)

    class Meta:
        model = Module
        fields = ["id", "title", "order", "lectures", "notes", "questions", "handwritten_notes"]


class SubjectSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Subject
        fields = ["id", "name", "icon", "color", "order", "done", "modules"]


class EligibilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Eligibility
        fields = ["cgpa", "branches", "backlogs", "batch", "details"]


class DSAQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DSAQuestion
        fields = ["id", "title", "difficulty", "url", "topic", "frequency"]


class WebDevItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebDevItem
        fields = ["id", "title", "type", "url"]


class CompanySerializer(serializers.ModelSerializer):
    eligibility = EligibilitySerializer(read_only=True)
    dsa_questions = DSAQuestionSerializer(many=True, read_only=True)
    webdev_items = WebDevItemSerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ["id", "name", "icon", "color", "order", "eligibility", "dsa_questions", "webdev_items"]