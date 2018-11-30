module.exports = (sequelize, Sequelize) => {
    const CarModel =  require('../model/carModel.model.js')(sequelize, Sequelize);
    const ExtraFeatures =  require('../model/extraFeatures.model.js')(sequelize, Sequelize);

    const ExtraFeaturesJoinTable = sequelize.define('car_model_extera_features_join_table', {

    });
    ExtraFeaturesJoinTable.belongsTo(CarModel, {foreignKey: 'carModelId'});
    ExtraFeaturesJoinTable.belongsTo(ExtraFeatures, {foreignKey: 'extraFeaturesId', as :"extraFeatures"});

    return ExtraFeaturesJoinTable;
}