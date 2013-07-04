from django.db import models

# Create your models here.
class News(models.Model):
  news_title = models.CharField(max_length = 64)
  news_date = models.DateField()
  news_image = models.ImageField(upload_to = 'src/images', blank = True)
  news_content = models.TextField()

  def __unicode__(self):
  	return self.news_title

