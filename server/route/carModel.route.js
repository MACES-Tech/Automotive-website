module.exports = function(app) {
 
    const carModel = require('../controller/carModel.controller.js');
 
    // Create a new carBrand
    app.post('/api/carModel', carModel.create);
 
    // Delete a carBrand with Id    
    app.get('/api/carBrand/:carBrandId/carModel', carModel.findBycarBrandId);

    app.delete('/api/carModel/:carModelId', carModel.delete);
        // Retrieve a single carModel by name
    app.get('/api/carModel/name/:modelName', carModel.findByName);
}