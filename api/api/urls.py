from django.urls import path
from . import views

urlpatterns = [
    path("texts/", views.TextListCreate.as_view(), name="text-list"),
    path("texts/delete/<int:pk>/", views.TextDelete.as_view(), name="delete-text"),
]
