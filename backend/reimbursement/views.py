from rest_auth.registration.views import SocialLoginView
from .serializers import paymentSerializer
from django.shortcuts import render
from rest_framework import serializers
from .models import payment
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import Http404

class paymentList(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        payments = payment.objects.all()
        serializer = paymentSerializer(payments, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = paymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class paymentDetail(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get_object(self, pk):
        try:
            return payment.objects.get(pk=pk)
        except payment.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        payment = self.get_object(pk)
        serializer = paymentSerializer(payment)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        payment = self.get_object(pk)
        serializer = paymentSerializer(payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        payment = self.get_object(pk)
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
