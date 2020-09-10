from rest_framework import viewsets
from filtering_posts.models import Document
from filtering_posts.serializers import DocumentSerializer
from rest_framework.response import Response
from django.http import HttpResponseBadRequest
from datetime import datetime
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [IsAdminUser]

    @action(methods=['get'], detail=False, url_path="get", url_name="get", permission_classes=[])
    def get(self, request):
        try:
            year = int(request.query_params.get('year'))
            month = int(request.query_params.get('month'))
        except:
            return HttpResponseBadRequest("Failed: parsing arguments")
        
        result = Document.objects.filter(cover_date__year=year, cover_date__month=month).order_by("-citedby_count")
        
        serializer = self.get_serializer(result, many=True)
        return Response(serializer.data)

