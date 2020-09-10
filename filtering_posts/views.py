from rest_framework import viewsets
from filtering_posts.models import Document
from filtering_posts.serializers import DocumentSerializer

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

