const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
 
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }
 
    const li = document.createElement('li');
    li.textContent = taskText;
 
    // Crear botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };
 
    // Marcar tarea como completada
    li.onclick = () => {
        li.classList.toggle('completed');
    };

    // Editar la tarea
    li.onclick = () => {
        const newTaskText = prompt('Edita tu tarea:', li.textContent);
        if (newTaskText) {
            li.firstChild.textContent = newTaskText;
            saveTasks(); //Guarda despues de editar
        }
    }
 
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Limpiar el input
}

// Mostar y ocultar tareas
document.getElementById('show-all').addEventListener('click', () => {
    const items = taskList.getElementsByTagName('li');
    for (let item of items) {
        item.style.display = 'block';
    }
})



// Evento para agregar tarea al hacer clic en el botón
addTaskButton.addEventListener('click', addTask);
 
// Evento para agregar tarea al presionar Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});