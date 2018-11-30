module.exports = (sequelize, Sequelize) => {
	const CarBrand =  require('../model/carbrand.model.js')(sequelize, Sequelize);
	const File =  require('../model/file.model.js')(sequelize, Sequelize);
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
		serviceImage:{
			type: Sequelize.INTEGER
		},
		serviceIsGeneral:{
			type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
		},carBrandId:{
			type: Sequelize.INTEGER,allowNull: false
		},createdAt: {
			allowNull: false,
			defaultValue: new Date(),
			type: Sequelize.DATE
		  },
		  updatedAt: {
			allowNull: false,
			defaultValue: new Date(),
			type: Sequelize.DATE
			},
			miniService:{
				type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
			},
			sliderService:{
				type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
			}
	});
	CarService.belongsTo(CarBrand, {foreignKey: 'carBrandId'});
	CarService.belongsTo(File, {foreignKey : 'serviceImage',as:"serviceMainImage"})
	return CarService;
}