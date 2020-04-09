const recipients = [];

for (let x = 1; x <= 10; x++) {
  recipients.push({
    name: `Destinatário 0${x}`,
    street: `Rua 0${x}`,
    number: x,
    complement: `Complemento 0${x}`,
    state: `Estado 0${x}`,
    city: `cidade 0${x}`,
    zip_code: `Zip Code 0${x}`,
    created_at: new Date(),
    updated_at: new Date(),
  });
}


module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('recipients', recipients, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('recipients', null, {});
  },
};
