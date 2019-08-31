const db = require('../config/db.config.js');

const Event = db.mediaCenterEvent;
// Post a carBrand
exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	console.log(model);
	
	Event.create(model).then(event => {
        res.send(event);
	}).catch(next);
};

// Delete a carBrand by Id
exports.delete = (req, res, next) => {
	const id = req.params.eventId;
	Event.destroy({
	  where: { id: id }
	}).then(() => {
		// next()
	  res.status(200).send('deleted successfully an event with id = ' + id);
	}).catch(next);
};


exports.getAllMediaCenterEvents = (req, res, next) => {
	Event.findAll({include: [
		{ model: db.file, as: 'file' }], order:[['createdAt', 'DESC']]}).then((mediaCenterEvent)=>{
		// next();
		res.status(200).send(mediaCenterEvent);
	}).catch(next);
};