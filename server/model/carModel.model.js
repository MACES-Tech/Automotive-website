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
			type: Sequelize.TEXT
		},
		arBannerHeader: {
			type: Sequelize.TEXT
        },
        firstHeader: {
			type: Sequelize.TEXT
		},
		arFirstHeader: {
			type: Sequelize.TEXT
        },
        firstParagraph: {
			type: Sequelize.TEXT
		},
		arFirstParagraph: {
			type: Sequelize.TEXT
        }
	});
	CarModel.belongsTo(Brand, {foreignKey : 'carBrandId'})
    CarModel.belongsTo(File, {foreignKey : 'mainImageId' , as :"mainImage"})
    CarModel.belongsTo(File, {foreignKey : 'coverImageId'})
	CarModel.belongsTo(Video, {foreignKey : 'videoId'})
	return CarModel;
}