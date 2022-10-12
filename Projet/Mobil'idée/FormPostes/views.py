from ast import FormattedValue
from urllib import request
from django.http import HttpResponse
from django.shortcuts import render
from .models import Poste
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'form_poste/base.html')

def poste_list(request):
    poste = Poste.objects.all().order_by('-id')
    context = {
        'poste': poste
    }   
    return render(request, 'form_postes/index.html', context)

def poste_details(request):
    return HttpResponse("Détails d'un poste")

def poste_create(request):
    return HttpResponse("Creation d'un poste")

def poste_update(request, id):
    return HttpResponse(f"Mise à jour d'un poste : {id}")

def poste_delete(request, id):
    return HttpResponse(f"Suppression d'un poste : {id}")