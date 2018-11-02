const db = require('../config/db.config.js');
const CarBrand = db.carbrand;
 
// Post a carBrand
exports.create = (req, res) => {	
	// Save to MySQL database
	CarBrand.create({  
		name: req.body.name,
		arName: req.body.arName
	}).then(carBrand => {		
		// Send created carBrand to client
		res.send(carBrand);
	});
};
 
// FETCH all carBrands
exports.findAll = (req, res) => {
	CarBrand.findAll().then(carBrands => {
	  // Send all carBrands to Client
	  res.send(carBrands);
	});
};
 
// Find a carBrand by Id
exports.findById = (req, res) => {	
	CarBrand.findById(req.params.brandId).then(carBrand => {
		res.send(carBrand);
	})
};
 
// Update a carBrand
exports.update = (req, res) => {
	const id = req.params.brandId;
	CarBrand.update( { name: req.body.name,arName:req.body.arName}, 
					 { where: {id: req.params.brandId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a carBrand with id = " + id);
				   });
};
 
// Delete a carBrand by Id
exports.delete = (req, res) => {
	const id = req.params.brandId;
	CarBrand.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a carBrand with id = ' + id);
	});
};