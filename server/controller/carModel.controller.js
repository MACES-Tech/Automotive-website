const db = require('../config/db.config.js');
const CarModel = db.carModel;
const fileService = require('../service/file.service.js');
const videoService = require('../service/video.service.js');
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	console.log(model);
	
	CarModel.create({  
		name: model.name,
		arName: model.arName,
		mainImageId: req.body.mainImage,
		carBrandId: model.brandId,
		firstParagraph: model.firstParagraph,
		arFirstParagraph: model.arFirstParagraph
	}).then(carModel => {		
		// Send created carBrand to client
		// next()
		res.send(carModel);
	}).catch(next);
	
};
 
exports.findBycarBrandId = (req, res, next) => {
	const carBrandId = req.params.carBrandId;
	CarModel.findAll({include: [
		{ model: db.file, as: 'mainImage' }
	],
	where:{carBrandId:carBrandId}}).then((carModels)=>{
		// next();
		res.status(200).send(carModels);
	}).catch(next);

};
exports.findByName = (req, res, next) => {
	CarModel.findAll({where:{name:req.params.modelName}}).then(carModel => {
		// next()
		res.send(carModel[0]);
	}).catch(next);
};
exports.update = (req, res, next) => {
	const id = req.params.carModelId;
	carModelObject = req.body
	CarModel.update( carModelObject, 
					 { where: {id: req.params.carModelId} }
					 ).then(() => {
						// next()
					 res.status(200).send("updated successfully a carBrand with id = " + id);
				   }).catch(next);
};

// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.carModelId;
	CarModel.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully a carModel with id = ' + id);
	}).catch(next);
};