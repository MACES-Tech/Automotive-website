const db = require('../config/db.config.js');

const Video = db.mediaCenterVideo;
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	console.log(model);
	
	Video.create(model).then(video => {
        res.send(video);
	}).catch(next);
	
};

// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.videoId;
	Video.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a Video with id = ' + id);
	}).catch(next);
};


exports.getAllMediaCenterVideos = (req, res, next) => {
	Video.findAll({order:[['createdAt', 'DESC']]}).then((mediaCenterVideo)=>{
		// next();
		res.status(200).send(mediaCenterVideo);
	}).catch(next);
};