module.exports = (sequelize, Sequelize) => {
    const File =  require('./file.model.js')(sequelize, Sequelize);
	const Slider = sequelize.define('slider', {
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
        }
        
    })
    Slider.belongsTo(File, {foreignKey : 'imageId' , as :"image"})
    return Slider;
}