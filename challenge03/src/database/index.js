import Sequelize from 'sequelize';
import User from '../app/models/User';
import Deliveryman from '../app/models/Deliveryman';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Order from '../app/models/Order';
import databaseConfig from '../config/database';

const models = [
  User,
  Recipient,
  Deliveryman,
  File,
  Order,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connections = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connections));
    models.forEach((model) => model.associate && model.associate(this.connections.models));
  }
}

export default new Database();
