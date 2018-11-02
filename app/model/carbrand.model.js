module.exports = (sequelize, Sequelize) => {
	const CarBrand = sequelize.define('car_brand', {
	  name: {
			type: Sequelize.STRING
		},
		arName: {
			type: Sequelize.STRING
		},
	});
	
	return CarBrand;
}