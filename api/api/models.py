from django.db import models

class Text(models.Model):
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text

class TgUser(models.Model):
    tg_id = models.CharField(max_length=255, unique=True)
    username = models.CharField(max_length=255)

    def __str__(self):
        return self.tg_id

class UserText(models.Model):
    user = models.ForeignKey(TgUser, to_field="tg_id", on_delete=models.CASCADE)
    text = models.ForeignKey(Text, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)  

    class Meta:
        pass

    def __str__(self):
        return f"{self.user.tg_id} - {self.text.text[:30]}"
