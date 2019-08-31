module.exports = (sequelize, Sequelize) => {
    // const Section =  require('../model/section.model.js')(sequelize, Sequelize);
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
    const MediaCenterEvent = sequelize.define('media_center_event', {
      titleAr: {
        type: Sequelize.STRING
      },
      titleEn: {
        type: Sequelize.STRING
      },
      descrAr: {
        type: Sequelize.STRING
      },
      descrEn: {
        type: Sequelize.STRING
      },
    });
      // Gallery.belongsTo(Section, {foreignKey: 'sectionId'});
      MediaCenterEvent.belongsTo(File, {foreignKey: 'fileId', as :"file"});
      return MediaCenterEvent;
}