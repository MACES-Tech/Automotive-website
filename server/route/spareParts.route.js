module.exports = function(app) {
 
    const spareParts = require('../controller/spareParts.controller.js');
 
    // Create a new carBrand
    app.post('/api/spareParts', spareParts.create);
 
    // Delete a carBrand with Id    
    app.get('/api/carBrand/:carBrandId/spareParts', spareParts.findBycarBrandId);

    app.delete('/api/spareParts/:sparePartlId', spareParts.delete);

    app.put('/api/spareParts/:sparePartlId', spareParts.update);
}