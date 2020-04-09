const deliverymans = [];

for (let x = 1; x <= 10; x++) {
  deliverymans.push({
    name: `Deliveryman ${x}`,
    email: `deliveryman${x}@fastfeet.com`,
    avatar_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  });
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('deliverymans', deliverymans, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('deliverymans', null, {});
  },
};
