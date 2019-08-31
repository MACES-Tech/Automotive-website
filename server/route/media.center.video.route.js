module.exports = function(app) {
 
    const video = require('../controller/media.center.video.controller.js');
 
    // Create a new carBrand
    app.get('/api/media_center/video', video.getAllMediaCenterVideos);
    app.post('/api/media_center/video', video.create);
    app.delete('/api/media_center/video/:videoId', video.delete);
    
}