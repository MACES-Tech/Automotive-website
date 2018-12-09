const db = require('../config/db.config.js');
const AboutUs = db.aboutUs;

exports.findAll = (req, res, next) => {
	AboutUs.findAll().then(aboutUs => {
	//   next()
	  res.send(aboutUs[0]);
	}).catch(next);
};

exports.update = (req, res, next) => {
	const id = req.params.id;
	abouUslObject = req.body
	AboutUs.update( abouUslObject, 
					 { where: {id: id} }
					 ).then(() => {
						res.status(200).send("updated successfully a aboutUs with id = " + id);
						// next()
				   }).catch(next);
};

exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	AboutUs.create(model).then(aboutUs => {
		res.send(aboutUs);
	}).catch(next);
	
};