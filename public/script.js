const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (taskText !== '' && startDate !== '' && endDate !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>Tâche:</strong> ${taskText}<br>
            <strong>Date de début:</strong> ${startDate}<br>
            <strong>Date de fin:</strong> ${endDate}
        `;
        taskList.appendChild(taskItem);
        clearFormInputs();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

function clearFormInputs() {
    taskInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
}
