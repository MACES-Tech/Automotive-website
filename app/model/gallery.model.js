module.exports = (sequelize, Sequelize) => {
    const Section =  require('../model/section.model.js')(sequelize, Sequelize);
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
    const Gallery = sequelize.define('car_model_gallery', {
        title: {
			type: Sequelize.STRING
		},
		arTitle: {
			type: Sequelize.STRING
        },
        paragraph: {
			type: Sequelize.STRING
		},
		arParagraph: {
			type: Sequelize.STRING
        }
      });
      Gallery.belongsTo(Section, {foreignKey: 'sectionId'});
      Gallery.belongsTo(File, {foreignKey: 'fileId'});
      return Gallery;
}