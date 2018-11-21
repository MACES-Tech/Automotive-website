const db = require('../config/db.config.js');

const Gallery = db.gallery;
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	console.log(model);
	
	Gallery.create(model).then(gallery => {
        res.send(gallery);
	}).catch(next);
	
};

// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.galleryId;
	Gallery.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a gallery with id = ' + id);
	}).catch(next);
};