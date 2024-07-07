from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def generate_command(request):
    data = request.data
    application = data.get('application', '')
    version = data.get('version', '')
    function = data.get('function', '')
    no_of_auth = data.get('noOfAuth', '')
    process_or_validate = data.get('processOrValidate', '').upper()
    gts_control = data.get('gtsControl', '')
    username = data.get('username', '')
    password = data.get('password', '')
    company = data.get('company', '')
    replace_existing = data.get('replaceExisting', '')
    transaction_id = data.get('transactionId', '')
    message_data = data.get('messageData', '')

    command = f"{application},{version},{function},{process_or_validate},{no_of_auth},{username},{password}/{company},{transaction_id},{message_data}"
    return JsonResponse({'command': command}) 