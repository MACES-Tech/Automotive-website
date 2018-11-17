const db = require('../config/db.config.js');
const carService = db.carService;

 
// Find a carService by Id
exports.findById = (req, res, next) => {	
	carService.findByPk(req.params.ser).then(carBcarServicerand => {
		res.send(carService);
	}).catch(next);
};
 
