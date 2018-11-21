const db = require('../config/db.config.js');
const CarModel = db.carModel;
const Section = db.section;
const Gallery = db.gallery;
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
		Section.create({carModelId: carModel.id}).then(section=>{
			res.send(carModel);
		}).catch(next);
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
		model = carModel[0];
		var jsonResult = model.toJSON();
		Section.findAll({where:{carModelId:model.id}}).then(sections =>{
			jsonResult.sections = [];
			for (let index = 0; index < sections.length; index++) {
				jsonResult.sections.push(sections[index].toJSON());
				Gallery.findAll({include: [
					{ model: db.file, as: 'file' }
				], where:{sectionId:jsonResult.sections[index].id}}).then(files =>{
					jsonResult.sections[index].files = [];
					for (let index2 = 0; index2 < files.length; index2++) {
						const element = files[index2].toJSON();
						jsonResult.sections[index].files.push(element);
					}
					if(index === jsonResult.sections.length - 1){
						res.send(jsonResult);
					}
				})
				
			}
		})
		
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