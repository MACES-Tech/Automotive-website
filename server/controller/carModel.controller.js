const db = require('../config/db.config.js');
const CarModel = db.carModel;
const Section = db.section;
const Gallery = db.gallery;
const KeyFeatures = db.keyFeatures;
const keyFeaturesService = require('../service/keyFeatures.service');
const videoService = require('../service/video.service.js');
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	console.log(model);
	var keyFeatures = model.keyFeatures;
	CarModel.create({  
		name: model.name,
		arName: model.arName,
		mainImageId: req.body.mainImage,
		carBrandId: model.brandId,
		firstParagraph: model.firstParagraph,
		arFirstParagraph: model.arFirstParagraph
	}).then(carModel => {
		
		Section.create({firstHeader:"slider",carModelId: carModel.id}).then(section=>{
			Section.create({firstHeader:"body",carModelId: carModel.id}).then(section=>{
				Section.create({firstHeader:"brochures",carModelId: carModel.id}).then(section=>{
					keyFeatures.carModelId = carModel.id;
					KeyFeatures.create(keyFeatures).then(()=>{
						res.send(carModel);
					})

				})
			})
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
		var jsonResult = [];
		for (let index = 0; index < carModels.length; index++) {
			const element = carModels[index];
			
			jsonElement = element.toJSON();
			keyFeaturesService.getKeyFeatures(jsonElement.id,jsonElement,function(jsonElement){
				
				jsonResult.push(jsonElement);

				if(index == carModels.length - 1){
					res.status(200).send(jsonResult);
		
				}
			})
		}
	}).catch(next);
};
exports.findByName = (req, res, next) => {
	CarModel.findAll({where:{name:req.params.modelName}}).then(carModel => {
		// next()
		model = carModel[0];
		var jsonResult = model.toJSON();

		KeyFeatures.findAll({where:{carModelId:model.id},order:[['createdAt', 'DESC']]}).then(keyFeatures =>{
			keyFeatures = keyFeatures[0];
			jsonResult.keyFeatures = keyFeatures.toJSON();

			Section.findAll({where:{carModelId:model.id} ,order:[['firstHeader', 'DESC']] }).then(sections =>{
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
		})
	}).catch(next);
};
exports.update = (req, res, next) => {
	const id = req.params.carModelId;
	carModelObject = req.body
	CarModel.update( carModelObject, 
					 { where: {id: req.params.carModelId} }
					 ).then(() => {
						KeyFeatures.update(carModelObject.keyFeatures,{
							where: {id: carModelObject.keyFeatures.id}
						}).then((updated) =>{
							console.log(updated);
							if(updated[0] == 0){
								carModelObject.keyFeatures.carModelId = carModelObject.id
								KeyFeatures.create(carModelObject.keyFeatures).then((created) =>{
								
								});
							}
							
							res.status(200).send("updated successfully a carBrand with id = " + id);
						})
						// next()
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