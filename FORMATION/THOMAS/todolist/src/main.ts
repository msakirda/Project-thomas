import './style.css';

// Récupérer les éléments du DOM
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// Charger les tâches depuis le stockage local lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');
  const tasks: string[] = storedTasks && typeof storedTasks === 'string' ? JSON.parse(storedTasks) : [];
  tasks.forEach(task => addTaskToList(task));
});

// Ajouter une tâche à la liste
function addTaskToList(taskText: string) {
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Ajouter le nouvel élément li en haut de la liste des tâches
  taskList.prepend(li);
}

// Enregistrer une nouvelle tâche dans le stockage local
addButton.addEventListener('click', () => {
  const newTask = taskInput.value;
  if (newTask !== '') {
    addTaskToList(newTask);
    
    // Récupérer les tâches existantes depuis le stockage local
    const storedTasks = localStorage.getItem('tasks');
    const tasks: string[] = storedTasks && typeof storedTasks === 'string' ? JSON.parse(storedTasks) : [];
    
    // Ajouter la nouvelle tâche au début de la liste
    tasks.unshift(newTask);
    
    // Enregistrer la liste mise à jour dans le stockage local
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    taskInput.value = ''; // Réinitialiser l'entrée
  }
});
