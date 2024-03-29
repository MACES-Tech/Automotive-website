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
        'car_services',
        'miniService',
        {
          type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
        }
      ).then(function(){
       return queryInterface.addColumn(
          'car_services',
          'sliderService',
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