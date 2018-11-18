const db = require('../config/db.config.js');
const Video = db.video;

exports.create = (video, cb) => {
    Video.create(video).then(cb).catch(cb)
}
