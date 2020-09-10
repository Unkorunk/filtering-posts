from rest_framework import serializers
from filtering_posts.models import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id', 'title', 'cover_date', 'citedby_count')
