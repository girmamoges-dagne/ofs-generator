from django.db import models

class Command(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    command_text = models.TextField()

    def __str__(self):
        return self.name