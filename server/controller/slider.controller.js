const db = require('../config/db.config.js');
const Slider = db.slider;

exports.findAll = (req, res, next) => {
	Slider.findAll({include: [
		{ model: db.file, as: 'image' }
	]}).then(slider => {
	  res.send(slider);
	}).catch(next);
};

exports.delete = (req, res, next) => {
	const id = req.params.id;
	Slider.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a slider with id = ' + id);
	}).catch(next);
};

exports.update = (req, res, next) => {
	const id = req.params.id;
	sliderObject = req.body
	Slider.update( sliderObject, 
					 { where: {id: id} }
					 ).then(() => {
						res.status(200).send("updated successfully a sliderObject with id = " + id);
						// next()
				   }).catch(next);
};

exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	Slider.create(model).then(slider => {
		res.send(slider);
	}).catch(next);
	
};