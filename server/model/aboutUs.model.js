module.exports = (sequelize, Sequelize) => {
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
	const AboutUs = sequelize.define('about_us', {
        title: {
			type: Sequelize.TEXT
		},
		arTitle: {
			type: Sequelize.TEXT
        },
        paragraph: {
			type: Sequelize.TEXT
		},
		arParagraph: {
			type: Sequelize.TEXT
        },
        missionParagraph: {
			type: Sequelize.TEXT
		},
		arMissionParagraph: {
			type: Sequelize.TEXT
		},visionParagraph: {
			type: Sequelize.TEXT
		},
		arVisionParagraph: {
			type: Sequelize.TEXT
        },
        
    })
    AboutUs.belongsTo(File, {foreignKey : 'missionImageId' , as :"missionImage"})
    AboutUs.belongsTo(File, {foreignKey : 'visionImageId' , as :"visionImage"})
    return AboutUs;
}