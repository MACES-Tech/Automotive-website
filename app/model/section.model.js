module.exports = (sequelize, Sequelize) => {
    const CarModel =  require('../model/carModel.model.js')(sequelize, Sequelize);
    const Section = sequelize.define('car_model_section', {
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
      Section.belongsTo(CarModel, {foreignKey: 'carModelId'});
      return Section;
}