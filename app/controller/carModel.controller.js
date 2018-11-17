const db = require('../config/db.config.js');
const CarModel = db.carModel;
const fileService = require('../service/file.service.js');
const videoService = require('../service/video.service.js');
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body.name;
	fileService.create(model,function(){
		CarModel
		.build({  
			name: req.body.name,
			arName: req.body.arName,
			bannerHeader: req.body.bannerHeader,
			arBannerHeader: req.body.arBannerHeader,
			firstHeader: req.body.firstHeader,
			arFirstHeader: req.body.arFirstHeader,
			firstParagraph:  req.body.firstParagraph,
			arFirstParagraph: req.body.arFirstParagraph,
			mainImageId: req.body.mainImage,
			coverImageId: req.body.coverImage,
			videoId: req.body.video,
			carBrandId: req.body.carBrand}).setSections([])
		.save().then(carBrand => {		
			// Send created carBrand to client
			next()
			res.send(carBrand);
		}).catch(next);
	})
	
};
 
exports.findBycarBrandId = (req, res, next) => {
	const carBrandId = req.params.carBrandId;
	CarModel.findAll({include: [
		{ model: db.file, as: 'mainImage' }
	],
	where:{carBrandId:carBrandId}}).then((carModels)=>{
		next();
		res.status(200).send(carModels);
	}).catch(next);

};
// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.carModelId;
	CarModel.destroy({
	  where: { id: id }
	}).then(() => {
		next()
	  res.status(200).send('deleted successfully a carModel with id = ' + id);
	}).catch(next);
};