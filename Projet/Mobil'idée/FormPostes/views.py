from django.http import HttpResponse
from django.shortcuts import render
from .models import Poste

# Create your views here.
def poste_list(request):
    poste = Poste.objects.all().order_by('-id')
    context = {
        'poste': poste
    }   
    return render(request, 'Templates/.html', context)

def poste_details(request):
    return HttpResponse("Détails d'un poste")

def poste_create(request):
    return HttpResponse("Creation d'un poste")

def poste_update(request, id):
    return HttpResponse(f"Mise à jour d'un poste : {id}")

def poste_delete(request, id):
    return HttpResponse(f"Suppression d'un poste : {id}")