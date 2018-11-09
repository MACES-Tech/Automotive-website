module.exports = function(app) {
 
    const carModel = require('../controller/carModel.controller.js');
 
    // Create a new carBrand
    app.post('/api/carModel', carModel.create);
 
    // Delete a carBrand with Id
    app.delete('/api/carModel/:carModelId', carModel.delete);
}