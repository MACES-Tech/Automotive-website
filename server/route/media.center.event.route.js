module.exports = function(app) {
 
    const event = require('../controller/media.center.event.controller.js');
 
    // Create a new carBrand
    app.get('/api/media_center/event', event.getAllMediaCenterEvents);
    app.post('/api/media_center/event', event.create);
    app.delete('/api/media_center/event/:eventId', event.delete);
    
}