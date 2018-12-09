'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'car_models',
      'userId',
      {
        type: Sequelize.INTEGER, allowNull: true, defaultValue: null
      }
    ).then(function(){
      return queryInterface.addColumn(
         'car_models',
         'isPublished',
         {
           type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
         }
       ) 
     });  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
