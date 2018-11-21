module.exports = (sequelize, Sequelize) => {
	const Service = sequelize.define('service', {
	  	name: {
			type: Sequelize.STRING,
			allowNull:false
		},
		phone: {
			type: Sequelize.STRING,
			allowNull:false
		},
		email: {
			type: Sequelize.STRING,
			allowNull:false
		},
		brand: {
			type: Sequelize.STRING,
			allowNull:false
		},
		model:{
			type: Sequelize.STRING,
			allowNull:false
		},
		chassis:{
			type: Sequelize.STRING,
			 allowNull: false
		}
	});
	return Service;
}