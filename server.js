const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let tasks = [];

app.post('/tasks', (req, res) => {
    const { task, startDate, endDate } = req.body;
    const newTask = {
        task,
        startDate,
        endDate
    };
    tasks.push(newTask);
    res.status(201).json({ message: 'Tâche ajoutée', task: newTask });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
