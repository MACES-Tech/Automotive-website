module.exports = function(app) {
 
    const service = require('../controller/services.controller.js');
 
    // Create a new carService
    app.post('/api/services', service.create);
    // get all services for car by brand 
    app.get('/api/services', service.getAllServices);
    // Delete a service with Id   
    app.delete('/api/services/:serviceId', service.delete);
    
}