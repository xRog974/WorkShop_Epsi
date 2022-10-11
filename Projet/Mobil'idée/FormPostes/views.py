from django.http import HttpResponse
from django.shortcuts import render
from .models import Poste
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

# Create your views here.
def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'form_postes/signup.html', {'form': form})

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