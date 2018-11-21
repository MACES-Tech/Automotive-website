const db = require('../config/db.config.js');
const services = db.services;


exports.create = (req, res, next) => {	
	// Save to MySQL database
	var service = req.body;
	services.create(service).then(new_Service => {		
		// Send created service to client
		// next()
		res.send(new_Service);
	}).catch(next);
	
};

// Delete a service by Id
exports.delete = (req, res, next) => {
	const id = req.params.serviceId;
	services.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a service with id = ' + id);
	}).catch(next);
};
 
exports.getAllServices = (req, res, next) => {
	services.findAll().then((Services)=>{
		// next();
		res.status(200).send(Services);
	}).catch(next);
};
