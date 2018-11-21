module.exports = (sequelize, Sequelize) => {
    const CarModel =  require('../model/carModel.model.js')(sequelize, Sequelize);
    const Section = sequelize.define('car_model_key_features', {
        body: {
			type: Sequelize.STRING
		},
		arBody: {
			type: Sequelize.STRING
        },
        transmission: {
			type: Sequelize.TEXT
		},
		arTransmission: {
			type: Sequelize.TEXT
        },
        fuelType:{
            type: Sequelize.STRING
        },
        arFuelType:{
            type: Sequelize.STRING
        },
        engine:{
            type: Sequelize.STRING
        },
        arEngine:{
            type: Sequelize.STRING
        },
        regYear:{
            type: Sequelize.STRING
        },
        arRegYear:{
            type: Sequelize.STRING
        },
        fuelEconomy:{
            type: Sequelize.STRING
        },
        arFuelEconomy:{
            type: Sequelize.STRING
        }
      });
      Section.belongsTo(CarModel, {foreignKey: 'carModelId'});
      return Section;
}