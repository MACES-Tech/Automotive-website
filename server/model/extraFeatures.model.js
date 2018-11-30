module.exports = (sequelize, Sequelize) => {
    const ExtraFeatures = sequelize.define('car_model_extera_features', {
        title: {
			type: Sequelize.STRING
        },
        arTitle: {
			type: Sequelize.STRING
		},
    });

    return ExtraFeatures;
}