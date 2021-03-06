
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'deliverymans',
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'files',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('deliverymans', 'avatar_id');
  },
};
