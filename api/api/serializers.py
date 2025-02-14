from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Text, TgUser, UserText

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password",]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user;
class TgUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TgUser 
        fields = ["id", "tg_id", "username"]

class UserTextSerializer(serializers.ModelSerializer):
    class Meta: 
        model = UserText
        fields = ['user', 'text', 'added_at']

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ["id", "text"]

