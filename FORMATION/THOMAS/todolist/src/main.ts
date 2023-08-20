const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

function loadTasksFromAPI() {
  fetch('http://localhost:1337') 
    .then(response => response.json())
    .then(tasks => tasks.forEach(task => addTaskToList(task.title)));
}

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromAPI();
});

function addTaskToList(taskText: string) {
  const li = document.createElement('li');
  const deleteIcon = document.createElement('i');

  // Gestionnaire d'événements pour le clic sur l'icône de corbeille
  deleteIcon.addEventListener('click', () => {
    removeTaskFromAPI(taskText);
  });


  taskList.prepend(li);
}

function removeTaskFromAPI(taskText: string) {
  fetch(`http://localhost:1337?title=${taskText}`, { 
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

    fetch('http://localhost:1337', { 
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
