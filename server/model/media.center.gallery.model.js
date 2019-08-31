module.exports = (sequelize, Sequelize) => {
    // const Section =  require('../model/section.model.js')(sequelize, Sequelize);
    const File =  require('../model/file.model.js')(sequelize, Sequelize);
    const MediaCenterGallery = sequelize.define('media_center_gallery', {
      });
      // Gallery.belongsTo(Section, {foreignKey: 'sectionId'});
      MediaCenterGallery.belongsTo(File, {foreignKey: 'fileId', as :"file"});
      return MediaCenterGallery;
}