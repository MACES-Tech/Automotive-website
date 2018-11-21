module.exports = function(app) {
 
    const carService = require('../controller/carService.controller.js');
 
    // Create a new carService
    app.post('/api/carService', carService.create);
 
    // get all services for car by brand 
    app.get('/api/carBrand/:carBrandId/carService', carService.findBycarBrandId);
    // Delete a service with Id   
    app.delete('/api/service/:serviceId', carService.delete);
    //     // Retrieve a single carModel by name
    // app.get('/api/carModel/name/:modelName', carModel.findByName);

    app.put('/api/carService/:serviceId', carService.update);
}