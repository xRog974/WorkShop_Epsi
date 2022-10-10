from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def poste_list(request):
    return HttpResponse("Hello world !")

def poste_details(request):
    return HttpResponse("Détails d'un profil")

def poste_create(request):
    return HttpResponse("Creation d'un profil")

def poste_update(request, id):
    return HttpResponse(f"Mise à jour d'un profil : {id}")

def poste_delete(request, id):
    return HttpResponse(f"Suppression d'un profil : {id}")