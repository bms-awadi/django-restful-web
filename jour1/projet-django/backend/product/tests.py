from rest_framework import status
from rest_framework.test import APITestCase

from .models import Category, Product


class ProductModelTests(APITestCase):
    def test_category_str(self):
        category = Category.objects.create(name="Electronique")
        self.assertEqual(str(category), "Electronique")

    def test_product_str(self):
        category = Category.objects.create(name="Electronique")
        product = Product.objects.create(name="iPhone 15", category=category, price="869.00")
        self.assertEqual(str(product), "iPhone 15")


class ProductApiTests(APITestCase):
    def setUp(self):
        self.electronique = Category.objects.create(name="Electronique")
        self.mode = Category.objects.create(name="Mode")
        self.iphone = Product.objects.create(
            name="iPhone 15", category=self.electronique, price="869.00"
        )
        self.macbook = Product.objects.create(
            name="MacBook Air M2", category=self.electronique, price="1199.00"
        )
        self.baskets = Product.objects.create(
            name="Nike Air Force 1", category=self.mode, price="119.99"
        )

    def test_list_products(self):
        response = self.client.get("/api/products/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)

    def test_retrieve_product(self):
        response = self.client.get(f"/api/products/{self.iphone.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "iPhone 15")
        self.assertEqual(response.data["category"]["name"], "Electronique")

    def test_retrieve_product_not_found(self):
        response = self.client.get("/api/products/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_filter_by_category(self):
        response = self.client.get("/api/products/", {"category": self.mode.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        names = [product["name"] for product in response.data]
        self.assertEqual(names, ["Nike Air Force 1"])

    def test_filter_by_min_price(self):
        response = self.client.get("/api/products/", {"min_price": "500"})
        names = {product["name"] for product in response.data}
        self.assertEqual(names, {"iPhone 15", "MacBook Air M2"})

    def test_filter_by_max_price(self):
        response = self.client.get("/api/products/", {"max_price": "200"})
        names = {product["name"] for product in response.data}
        self.assertEqual(names, {"Nike Air Force 1"})

    def test_filter_by_category_and_price_range(self):
        response = self.client.get(
            "/api/products/", {"category": self.electronique.id, "max_price": "1000"}
        )
        names = {product["name"] for product in response.data}
        self.assertEqual(names, {"iPhone 15"})
