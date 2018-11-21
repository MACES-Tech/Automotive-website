module.exports = function(app) {
 
    const gallery = require('../controller/gallery.controller.js');
 
    // Create a new carBrand
    app.post('/api/gallery', gallery.create);
    app.delete('/api/gallery/:galleryId', gallery.delete);

}