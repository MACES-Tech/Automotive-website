const db = require('../config/db.config.js');
const carService = db.carService;


exports.create = (req, res, next) => {	
	// Save to MySQL database
	var service = req.body;
	
	carService.create({  
		serviceTitle: service.serviceTitle,
		arServiceTitle: service.arServiceTitle,
		serviceDescription: service.serviceDescription,
		arServiceDescription: service.arServiceDescription,
		serviceImage: req.body.mainImage,
		carBrandId: service.carBrandId,
		serviceIsGeneral: service.serviceIsGeneral,
		miniService:service.miniService,
		sliderService:service.sliderService
	}).then(car_Service => {		
		// Send created carBrand to client
		// next()
		res.send(car_Service);
	}).catch(next);
	
};

exports.update = (req, res, next) => {
	const id = req.params.serviceId;
	serviceObject = req.body
	carService.update( serviceObject, 
					 { where: {id: id} }
					 ).then(() => {
						// next()
						res.status(200).send("updated successfully a car service with id = " + id);
					}).catch(next);
};

// Delete a service by Id
exports.delete = (req, res, next) => {
	const id = req.params.serviceId;
	carService.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a service with id = ' + id);
	}).catch(next);
};
 
exports.findBycarBrandId = (req, res, next) => {
	const carBrandId = req.params.carBrandId;
	carService.findAll({include: [
		{ model: db.file, as: 'serviceMainImage' }
	],
	where:{carBrandId:carBrandId}}).then((carServices)=>{
		// next();
		res.status(200).send(carServices);
	}).catch(next);
};
