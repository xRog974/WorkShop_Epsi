from ast import FormattedValue
from urllib import request
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.shortcuts import  render, redirect
from django.contrib.auth import login
from django.contrib import messages
from . import forms
from .models import Poste

# Create your views here.
def home(request):
    return render(request, 'form_poste/base.html')

def login_page(request):
    form = forms.LoginForm()
    message = ''
    if request.method == 'POST':
        form = forms.LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            if user is not None:
                login(request, user)
                message = f'Hello {user.username}! You have been logged in'
            else:
                message = 'Login failed!'
    return render(
        request, 'form_postes/login.html', context={'form': form, 'message': message})
    
def signup_page(request):
    form = forms.SignupForm()
    if request.method == 'POST':
        form = forms.SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            # auto-login user
            login(request, user)
            return redirect(settings.LOGIN_REDIRECT_URL)
    return render(request, 'form_postes/signup.html', context={'form': form})

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