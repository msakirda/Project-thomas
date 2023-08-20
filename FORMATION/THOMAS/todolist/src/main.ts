const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

function loadTasksFromAPI() {
  // Remplacez l'URL par le point de terminaison de votre API Strapi
  fetch('https://votre-api-strapi.com/tasks')
    .then(response => response.json())
    .then(tasks => tasks.forEach(task => addTaskToList(task.title)));
}

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromAPI();
});

function addTaskToList(taskText: string) {
  const li = document.createElement('li');
  const deleteIcon = document.createElement('i');
  
  // Icône de corbeille (icône de suppression)
  deleteIcon.classList.add('fas', 'fa-trash-alt');
  deleteIcon.style.cursor = 'pointer';
  li.appendChild(deleteIcon);

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // ...

  // Gestionnaire d'événements pour le clic sur l'icône de corbeille
  deleteIcon.addEventListener('click', () => {
    removeTaskFromAPI(taskText);
  });

  // ...

  taskList.prepend(li);
}

function removeTaskFromAPI(taskText: string) {
  // Remplacez l'URL par le point de terminaison de suppression de votre API Strapi
  fetch(`https://votre-api-strapi.com/tasks?title=${taskText}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Tâche supprimée de l\'API Strapi:', data);
    });
}

addButton.addEventListener('click', () => {
  const newTask = taskInput.value;
  if (newTask !== '') {
    addTaskToList(newTask);

    // Remplacez l'URL par le point de terminaison de création de votre API Strapi
    fetch('https://votre-api-strapi.com/tasks', {
      method: 'POST',
      body: JSON.stringify({ title: newTask }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Tâche ajoutée à l\'API Strapi:', data);
      });

    taskInput.value = '';
  }
});
