module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('files', [{
      name: 'image.png',
      path: 'loremipsum.png',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('files', null, {});
  },
};
