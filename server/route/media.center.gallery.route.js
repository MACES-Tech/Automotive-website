module.exports = function(app) {
 
    const gallery = require('../controller/media.center.gallery.controller.js');
 
    // Create a new carBrand
    app.get('/api/media_center/gallery', gallery.getAllMediaCenterImages);
    app.post('/api/media_center/gallery', gallery.create);
    app.delete('/api/media_center/gallery/:galleryId', gallery.delete);
    
}