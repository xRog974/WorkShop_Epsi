from pyexpat import model
from django.db import models

# Create your models here.
class Poste(models.Model):
    intitule = models.CharField(max_length=50),
    description = models.TextField(max_length=100)
    ville = models.CharField(max_length=50)
    created_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name