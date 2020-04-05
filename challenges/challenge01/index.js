const express = require("express");
const server = express();

server.use(express.json());

// Initialing the projects and tasks
const projects = [
  {
    "id": "1",
    "title": "New Project 1",
    "tasks": [
      "Task 1:01",
      "Task 1:02",
      "Task 1:03",
      "Task 1:04"
    ]
  },
  {
    "id": "2",
    "title": "New Project 2",
    "tasks": [
      "Task 2:01",
      "Task 2:02",
      "Task 2:03",
      "Task 2:04"
    ]
  }
];

// Middlewares

/**
 * Checks if the project exists using the id
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function checkIfProjectExists(req, res, next) {
  const { id } = req.params;

  if (projects.find(project => project.id === id)) {
    return next();
  }

  return res.json({
    error: `Projeto não encontrado`
  }, 400)
}

/**
 * Log in the console the amount of requests
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function logAmountOfRequests(req, res, next) {
  console.count("Amount of Requests: ");

  next();
}

server.use(logAmountOfRequests);


// Routes

/**
 * Adding a new project
 */
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  res.json({
    message: 'Projeto adicionado com sucesso!'
  }, 200);
});

/**
 * Showing all projects
 */
server.get('/projects', (req, res) => {
  return res.json({
    data: projects
  }, 200);
});

/**
 * Edit a project
 */
server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === id);

  project.title = title;

  return res.json({
    message: `Projeto ${id} alterado com sucesso!`
  }, 200);
});

/**
 * Delete a project
 */
server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const indexToSplice = projects.findIndex(project => project.id === id);

  projects.splice(indexToSplice, 1);

  res.json({
    message: `Projeto ${id} removido com sucesso`
  }, 200)
});

/**
 * Adding a new task to a project
 */
server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === id);

  project.tasks.push(title);

  res.json({
    message: `Task adicionada ao projeto ${id} com sucesso!`
  }, 200)
});

/**
 * Edit a task from a project
 */
server.put('/projects/:projectId/taks/:taskIndex', (req, res) => {
  const { projectId, taskIndex } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === projectId);
  const oldTask = project.tasks[taskIndex];
  project.tasks[taskIndex] = title;

  res.json({
    message: `Task '${oldTask}' alterada para '${title}'!`
  }, 200);
});

/**
 * Removing a task from a project
 */
server.delete('/projects/:projectId/taks/:taskIndex', (req, res) => {
  const { projectId, taskIndex } = req.params;

  const project = projects.find(project => project.id === projectId);
  const task = project.tasks[taskIndex];
  project.tasks.splice(taskIndex, 1);


  res.json({
    message: `Task '${task}' removida com sucesso!`
  }, 200);
});

// Initialing the server.
server.listen(3000);