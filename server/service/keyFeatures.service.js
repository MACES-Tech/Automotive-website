const db = require('../config/db.config.js');
const KeyFeatures = db.keyFeatures;

exports.getKeyFeatures = (modelId,jsonElement, cb) => {
    KeyFeatures.findAll({where:{carModelId:jsonElement.id},order:[['createdAt', 'DESC']]}).then(keyFeatures =>{
        var jsonResult  = {};
        if(keyFeatures.length > 0){
            model = keyFeatures[0];
            jsonResult = model.toJSON();
        }
        jsonElement.keyFeatures = jsonResult;
        cb(jsonElement)
    })
}