"""Mobilidée URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from FormPostes import views
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    #FormPostes URLs
    path('', views.login_page, name='login'),
    path('signup/', views.signup_page, name='signup'),
    path('home/', views.poste_list, name='home'),
    path('details/<int:id>/', views.poste_details, name='poste_details'),
    path('create/', views.poste_create, name='poste_create'),
    path('update/<int:id>/', views.poste_update, name='poste_update'),
    path('delete/<int:id>/', views.poste_delete, name='poste_delete'),
]