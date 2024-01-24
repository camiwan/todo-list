// taskController.js
const db = require('../models/taskModel');

// Adicionando uma tarefa
exports.addTask = (req, res) => {
  const { task_name, completed, timer } = req.body;
  db.query('INSERT INTO tasks (task_name, completed, timer) VALUES (?, ?, ?)', [task_name, completed, timer], (err, result) => {
    if (err) {
      console.error('Erro ao adicionar tarefa:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(201).send('Tarefa adicionada com sucesso!');
    }
  });
};

// Obtendo todas as tarefas
exports.getAllTasks = (req, res) => {
  
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      console.error('Erro ao obter tarefas:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).json(results);
    }
  });
};

// Atualizando uma tarefa
exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { task_name, completed, timer } = req.body;
  db.query('UPDATE tasks SET task_name = ?, completed = ?, timer = ? WHERE id = ?', [task_name, completed, timer, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar tarefa:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).send('Tarefa atualizada com sucesso!');
    }
  });
};

// Excluindo uma tarefa
exports.deleteTask = (req, res) => {

   const taskId = req.params.id;

    db.query('DELETE FROM tasks WHERE id = ?', [taskId], (err, result) => {
    if (err) {
      console.error('Erro ao excluir tarefa:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).send('Tarefa excluída com sucesso!');
    }
  });
};

// ... (outras funções do controlador) ...
