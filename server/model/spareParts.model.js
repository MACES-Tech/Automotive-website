module.exports = (sequelize, Sequelize) => {
	const Brand =  require('../model/carbrand.model.js')(sequelize, Sequelize);
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
	const SpareParts = sequelize.define('car_spare_part', {
        name: {
			type: Sequelize.STRING
		},
		arName: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.STRING
		},
		available:{
			type: Sequelize.BOOLEAN
		}
	});
	SpareParts.belongsTo(Brand, {foreignKey : 'carBrandId'})
    SpareParts.belongsTo(File, {foreignKey : 'mainImageId' , as :"mainImage"})
	return SpareParts;
}