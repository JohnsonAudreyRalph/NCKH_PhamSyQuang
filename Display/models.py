from django.db import models

# Create your models here.
class CONSTROL(models.Model):
    STATUS = models.IntegerField(default = 0)
    NAME = models.CharField(max_length = 255)

    def __str__(self):
        return self.NAME, self.STATUS