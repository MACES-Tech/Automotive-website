module.exports = (sequelize, Sequelize) => {
	const Brand =  require('../model/carbrand.model.js')(sequelize, Sequelize);
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
	const Video =  require('../model/video.model.js')(sequelize, Sequelize);
	const CarModel = sequelize.define('car_model', {
        name: {
			type: Sequelize.STRING
		},
		arName: {
			type: Sequelize.STRING
        },
        bannerHeader: {
			type: Sequelize.STRING
		},
		arBannerHeader: {
			type: Sequelize.STRING
        },
        firstHeader: {
			type: Sequelize.STRING
		},
		arFirstHeader: {
			type: Sequelize.STRING
        },
        firstParagraph: {
			type: Sequelize.STRING
		},
		arFirstParagraph: {
			type: Sequelize.STRING
        }
	});
	CarModel.belongsTo(Brand, {foreignKey : 'carBrandId'})
    CarModel.belongsTo(File, {foreignKey : 'mainImageId'})
    CarModel.belongsTo(File, {foreignKey : 'coverImageId'})
	CarModel.belongsTo(Video, {foreignKey : 'videoId'})
	return CarModel;
}