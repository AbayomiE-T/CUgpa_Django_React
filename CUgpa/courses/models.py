from django.db import models

# Create your models here.

#After creating a model, type in the following commands into the command line:

#python manage.py makemigrations
#python manage.py migrate 
class Course(models.Model):
      
      courseName = models.CharField(max_length=100)
      courseCode = models.CharField(max_length=20)
      creditValue = models.FloatField()
      grade = models.CharField(max_length=3)
      gradePoint = models.FloatField()