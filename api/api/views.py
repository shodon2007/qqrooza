from django.shortcuts import render, HttpResponse
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import TgUserSerializer, UserSerializer, TextSerializer, UserTextSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Text, TgUser, UserText

class TextListCreate(generics.ListCreateAPIView):
    serializer_class = TextSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Text.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class TextUpdate(generics.UpdateAPIView):
    queryset = Text.objects.all() 
    serializer_class = TextSerializer
    permission_classes = [IsAuthenticated]

class UserTextListView(generics.ListAPIView):
    queryset = UserText.objects.all()
    serializer_class = UserTextSerializer
    permission_classes = [IsAuthenticated]

class UserTextsView(APIView):
    def get(self, request, user_id):
        user_texts = UserText.objects.filter(user__id=user_id)
        texts = [user_text.text for user_text in user_texts]
        
        serializer = TextSerializer(texts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TextDelete(generics.DestroyAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Text.objects.all()

class TgUserListView(generics.ListAPIView):
    queryset = TgUser.objects.all()
    serializer_class = TgUserSerializer
    permission_classes = [IsAuthenticated]  # Только для авторизованных пользователей

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all();
    serializer_class = UserSerializer;
    permission_classes = [AllowAny]
