from django.shortcuts import render, redirect
from .models import Task
# Create your views here.

def home(request):
    return render(request, 'index.html')
    

def task_list(request):
    tasks= Task.objects.all()
    return render(request, 'index.html', {'tasks': tasks})

def add_task(request):
    if request.method == 'POST':
        title = request.POST['title']
        Task.objects.create(title=title)
        return redirect('task_list')
    
def delete(request, task_id):
    task= Task.objects.get(pk=task_id) 
    task.delete()
    return redirect('task_list')