const db = require('../config/db.config.js');
const UserMsgs = db.userMsgs;

exports.create = (req, res, next) => {	
	// Save to MySQL database
	var model = req.body;
	UserMsgs.create(model).then(msg => {
		res.send(msg);
	}).catch(next);
	
};
 
exports.findByType = (req, res, next) => {
	const typeId = req.params.typeId;
	UserMsgs.findAll({
	where:{type:typeId},order:[['createdAt', 'DESC']]}).then((msgs)=>{
		// next();
		res.status(200).send(msgs);
	}).catch(next);
};