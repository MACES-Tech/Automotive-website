module.exports = (sequelize, Sequelize) => {
	const Video = sequelize.define('video', {
        url: {
			type: Sequelize.STRING
		}
	});
	
	return Video;
}