'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // can't fiqure out how to do associated seeds


    return queryInterface.bulkInsert('teams', [
      { name: 'Team One', created_at: new Date(), updated_at: new Date() },
      { name: 'Team Two', created_at: new Date(), updated_at: new Date() }
    ], {})
    .then((res, io)=>{
      User.all()
      console.log('----', res, io)
      // return queryInterface.select('User', 'users')
    })
    .then((u) => console.log(u));
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
