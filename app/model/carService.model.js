module.exports = (sequelize, Sequelize) => {
	const Brand =  require('../model/carbrand.model.js')(sequelize, Sequelize);
	const CarService = sequelize.define('car_service', {
	  serviceTitle: {
			type: Sequelize.STRING
		},
		arServiceTitle: {
			type: Sequelize.STRING
		},
		serviceDescription: {
			type: Sequelize.STRING
		},
		arServiceDescription: {
			type: Sequelize.STRING
		},
		serviceImage: {
			type: Sequelize.STRING
		},
		serviceIsGeneral:{
			type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
		},carBrandId:{
			type: Sequelize.INTEGER,allowNull: false
		}
	});
	CarService.belongsToMany(Brand, { through: 'carBrandId',foreignKey : 'fk_carBrandId'});
	Brand.belongsToMany(CarService, {foreignKey: 'fk_carBrandId',through: 'id'});
	return CarService;
}