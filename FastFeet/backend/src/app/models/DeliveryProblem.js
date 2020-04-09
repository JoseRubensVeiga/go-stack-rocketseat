import Sequelize, { Model } from 'sequelize';

class DeliveryProblem extends Model {
  static init(sequelize) {
    super.init({
      description: Sequelize.STRING,
    }, {sequelize});

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order);
  }
}

export default DeliveryProblem;
