class User {
  constructor() {
    this.users = [
      {id: 1, name: "José", age: 22},
      {id: 2, name: "Rubens", age: 25},
      {id: 3, name: "Diego", age: 28}
    ];
  }

  show() {
    return this.users;
  }
  find(id) {
    id = Number(id);
    return this.users.find(user => user.id === id) || 'Usuário não encontrado';
  }

  add(user) {
    if (user.name && user.age) {
      user.id = this.users[this.users.length - 1].id + 1;
      this.users.push(user);

      return user;
    }

    return "Dados incorretos";
  }

  edit(id, newUser) {
    id = Number(id);
    let _user = {};
    this.users.forEach(user => {
      if(user.id === id) {
        user.name = newUser.name;
        user.age = newUser.age;

        _user = user;
      }
    });

    return _user;
  }

  remove(id) {
    id = Number(id);
    const user = this.users.find(user => user.id === id);
    this.users = this.users.filter(user => user.id !== id);
    return user;
  }
}

module.exports = new User