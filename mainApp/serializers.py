from rest_framework import serializers
from mainApp.models import Command

class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = '__all__'