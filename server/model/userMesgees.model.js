module.exports = (sequelize, Sequelize) => {
    const userMsgs = sequelize.define('user_messages', {
        name: {
			type: Sequelize.STRING,
			allowNull:false
		},
		phone: {
			type: Sequelize.STRING,
			allowNull:true
		},
		email: {
			type: Sequelize.STRING,
			allowNull:false
        },
        messsage:{
            type: Sequelize.TEXT,
            allowNull:true
        },
        type:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    })
    
	return userMsgs;
}