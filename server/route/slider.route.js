module.exports = function(app) {
 
    const slider = require('../controller/slider.controller.js');
 
    // Create a new carBrand
    app.post('/api/slider', slider.create);
    app.get('/api/slider', slider.findAll);
    app.delete('/api/slider/:id', slider.delete);
    app.put('/api/slider/:id', slider.update);
}