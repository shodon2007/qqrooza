from django.urls import path
from . import views

urlpatterns = [
    path("texts/", views.TextListCreate.as_view(), name="text-list"),
    path("texts/delete/<int:pk>/", views.TextDelete.as_view(), name="delete-text"),
    path("texts/update/<int:pk>/", views.TextUpdate.as_view(), name="update-text"),
    path("users/", views.TgUserListView.as_view(), name="user-list"), 
    path('user-texts/', views.UserTextListView.as_view(), name='user-text-list'),
    path('users/texts/<int:user_id>/', views.UserTextsView.as_view(), name="user-texts")
]
