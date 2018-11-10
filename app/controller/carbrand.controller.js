const db = require('../config/db.config.js');
const CarBrand = db.carbrand;

// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	CarBrand.create({  
		name: req.body.name,
		arName: req.body.arName
	}).then(carBrand => {		
		// Send created carBrand to client
		res.send(carBrand);
	}).catch(next);
};
 
// FETCH all carBrands
exports.findAll = (req, res, next) => {
	CarBrand.findAll().then(carBrands => {
	  // Send all carBrands to Client
	  res.send(carBrands);
	}).catch(next);
};
 
// Find a carBrand by Id
exports.findById = (req, res, next) => {	
	CarBrand.findByPk(req.params.brandId).then(carBrand => {
		res.send(carBrand);
	}).catch(next);
};
 
// Update a carBrand
exports.update = (req, res, next) => {
	const id = req.params.brandId;
	CarBrand.update( { name: req.body.name,arName:req.body.arName}, 
					 { where: {id: req.params.brandId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a carBrand with id = " + id);
				   }).catch(next);
};
 
// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.brandId;
	CarBrand.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a carBrand with id = ' + id);
	}).catch(next);
};