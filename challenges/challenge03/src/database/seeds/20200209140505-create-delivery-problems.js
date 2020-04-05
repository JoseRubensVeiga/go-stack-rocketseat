const deliveryProblems = [];

for (let x = 1; x <= 5; x++) {
  deliveryProblems.push({
    order_id: 3,
    description: `Problema 0${x}`,
    created_at: new Date(),
    updated_at: new Date(),
  });
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('delivery_problems', deliveryProblems, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('delivery_problems', null, {});
  },
};
