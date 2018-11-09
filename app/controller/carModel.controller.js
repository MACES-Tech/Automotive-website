const db = require('../config/db.config.js');
const CarModel = db.carModel;
const fileService = require('../service/file.service.js');
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	fileService.create(req.body.file,function(){
		CarModel.create({  
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
			carBrandId: req.body.carBrand
		}).then(carBrand => {		
			// Send created carBrand to client
			res.send(carBrand);
		}).catch(next);
	})
	
};
 
 
// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.carModelId;
	CarModel.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a carModel with id = ' + id);
	}).catch(next);
};