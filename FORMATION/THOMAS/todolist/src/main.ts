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
  
  // Bouton de suppression
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  li.appendChild(deleteButton);
  
  // Ajouter le nouvel élément li en haut de la liste des tâches
  taskList.prepend(li);

  // Gestionnaire d'événements pour le clic sur le bouton de suppression
  deleteButton.addEventListener('click', () => {
    removeTaskFromList(li, taskText);
  });
}

// Fonction de suppression
function removeTaskFromList(li: HTMLLIElement, taskText: string) {
  // Supprimer l'élément li de la liste visuelle
  taskList.removeChild(li);
  
  // Récupérer les tâches existantes depuis le stockage local
  const storedTasks = localStorage.getItem('tasks');
  const tasks: string[] = storedTasks && typeof storedTasks === 'string' ? JSON.parse(storedTasks) : [];

  // Supprimer la tâche du tableau des tâches
  const taskIndex = tasks.indexOf(taskText);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
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
