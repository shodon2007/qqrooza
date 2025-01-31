from django.db import models
# from django.contrib.auth.models import User

class Text(models.Model):
    text = models.CharField();    

    def __str__(self):
        return self.text
