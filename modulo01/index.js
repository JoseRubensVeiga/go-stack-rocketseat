const express = require('express');
const User = require('./User');
const Middleware = require('./Middleware');

const server = express();

server.use(express.json());

/**
 * req.query: Parâmetros de query.
 * req.params: Parâmetros de rota.
 * req.body: Parâmetros do body.
 */

server.use((req, res, next) => {

  console.log(`Passando pelo middleware`);

  return next();
});

// Listando todos os usuários
server.get('/users', (req, res) => {
  res.json({
    data: User.show()
  }, 200);
});

// Buscando um único usuário
server.get('/users/:id', Middleware.userExists, (req, res) => {
  const { id } = req.params;
  res.json({
    data: User.find(id)
  }, 200);
});

// Inserindo um novo usuário
server.post('/users', Middleware.hasNameAndAge, (req, res) => {
  const newUser = req.body;
  const userAdded = User.add(newUser);
  
  res.json({
    data: userAdded
  }, 201)
});

// Removendo um usuário
server.delete('/users/:id', (req, res) => {
  res.json({
    data: User.remove(req.params.id)
  });
});

// Editando um usuário
server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = User.edit(id, req.body);
  res.json({
    message: 'Usuário modificado com sucesso!',
    data: updatedUser
  });
});

server.listen(3000);