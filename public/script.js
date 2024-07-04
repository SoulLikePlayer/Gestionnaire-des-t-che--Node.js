const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (taskText !== '' && startDate && endDate && endDate > startDate) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>Tâche :</strong> ${taskText}<br>
            <strong>Date de début :</strong> ${formatDate(startDate)}<br>
            <strong>Date de fin :</strong> ${formatDate(endDate)}
        `;
        taskList.appendChild(taskItem);
        clearFormInputs();
    } else {
        alert('Veuillez remplir tous les champs correctement.');
    }
});

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

function clearFormInputs() {
    taskInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
}
