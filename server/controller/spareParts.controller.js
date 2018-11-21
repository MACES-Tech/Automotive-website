const db = require('../config/db.config.js');
const SpareParts = db.spareParts;
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	SpareParts.create(model).then(carSpareParts => {
		res.send(carSpareParts);
	}).catch(next);
	
};
 
exports.findBycarBrandId = (req, res, next) => {
	const carBrandId = req.params.carBrandId;
	SpareParts.findAll({include: [
		{ model: db.file, as: 'mainImage' }
	],
	where:{carBrandId:carBrandId}}).then((carSpareParts)=>{
		// next();
		res.status(200).send(carSpareParts);
	}).catch(next);
};

exports.update = (req, res, next) => {
	const id = req.params.sparePartlId;
	carModelObject = req.body
	SpareParts.update( carModelObject, 
					 { where: {id: req.params.sparePartlId} }
					 ).then(() => {
						res.status(200).send("updated successfully a carBrand with id = " + id);
						// next()
				   }).catch(next);
};

// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.sparePartlId;
	SpareParts.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a carModel with id = ' + id);
	}).catch(next);
};