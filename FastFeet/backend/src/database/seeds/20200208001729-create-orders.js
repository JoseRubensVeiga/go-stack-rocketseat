const orders = [];

const end_date = new Date();
end_date.setDate(end_date.getDate() + Math.floor(Math.random() * (5 - 20) + 5));

for (let x = 1; x <= 10; x++) {
  orders.push({
    recipient_id: x,
    deliveryman_id: x,
    signature_id: 1,
    product: `Product ${x}`,
    start_date: new Date(),
    end_date,
    created_at: new Date(),
    updated_at: new Date(),
  });
}


module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('orders', orders, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
