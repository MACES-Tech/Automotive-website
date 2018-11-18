module.exports = (sequelize, Sequelize) => {
	const CarBrand = sequelize.define('car_brand', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		arName: {
			type: Sequelize.STRING
		},
	});
	return CarBrand;
}