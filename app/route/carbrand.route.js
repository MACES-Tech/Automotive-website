module.exports = function(app) {
 
    const carBrand = require('../controller/carbrand.controller.js');
 
    // Create a new carBrand
    app.post('/api/carBrand', carBrand.create);
 
    // Retrieve all carBrands
    app.get('/api/carBrand', carBrand.findAll);
 
    // Retrieve a single carBrand by Id
    app.get('/api/carBrand/:brandId', carBrand.findById);

    // Retrieve a single carBrand by name
    app.get('/api/carBrand/name/:brandName', carBrand.findByName);

    // Update a carBrand with Id
    app.put('/api/carBrand/:brandId', carBrand.update);
 
    // Delete a carBrand with Id
    app.delete('/api/carBrand/:brandId', carBrand.delete);
}