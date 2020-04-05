const User = require('./User');

class Middleware {

  userExists(req, res, next) {
    const { id } = req.params;
    if (User.users.filter(u => u.id == id).length > 0) {
      return next();
    }

    return res.json({
      error: 'Usuário não existente'
    });
  }

  hasNameAndAge(req, res, next) {
    const user = req.body;
    if ( user.hasOwnProperty('name') && user.hasOwnProperty('age') ) {
      return next();
    }

    return res.json({
      error: 'Parâmetros \'name\' e \'age\' são obrigatórios'
    }, 400);
  }
}

module.exports = new Middleware;