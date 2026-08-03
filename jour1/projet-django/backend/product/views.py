from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

from .filters import ProductFilter
from .models import Product
from .serializers import ProductSerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.select_related("category").all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.select_related("category").all()
    serializer_class = ProductSerializer
