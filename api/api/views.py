from django.shortcuts import render, HttpResponse
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, TextSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Text

class TextListCreate(generics.ListCreateAPIView):
    serializer_class = TextSerializer;
    permission_classes = [IsAuthenticated];

    def get_queryset(self):
        return Text.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class TextDelete(generics.DestroyAPIView):
    queryset = Text.objects.all();
    serializer_class = TextSerializer;
    permission_classes = [IsAuthenticated];

    def get_queryset(self):
        print(self)
        return Text.objects.all()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all();
    serializer_class = UserSerializer;
    permission_classes = [AllowAny]
