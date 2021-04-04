from reimbursement.serializers import paymentSerializer
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from .models import payment
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def payment_list(request):
    """
    List all code snippets, or create a new payment.
    """
    if request.method == 'GET':
        snippets = payment.objects.all()
        serializer = paymentSerializer(snippets, many=True)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def payment(request,pk):
    try:
        payment = payment.objects.get(pk=pk)
    except payment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = paymentSerializer(payment)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = paymentSerializer(payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
