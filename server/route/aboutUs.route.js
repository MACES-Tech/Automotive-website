module.exports = function(app) {
 
    const aboutUs = require('../controller/aboutUs.controller.js');
 
    // Create a new carBrand
    app.post('/api/aboutUs', aboutUs.create);
 

    app.get('/api/aboutUs', aboutUs.findAll);

    app.put('/api/aboutUs/:id', aboutUs.update);
}