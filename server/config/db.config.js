const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.carbrand = require('../model/carbrand.model.js')(sequelize, Sequelize);
db.file = require('../model/file.model.js')(sequelize, Sequelize);
db.carModel = require('../model/carModel.model.js')(sequelize, Sequelize);
db.video = require('../model/video.model.js')(sequelize, Sequelize);
db.section = require('../model/section.model.js')(sequelize, Sequelize);
db.gallery = require('../model/gallery.model.js')(sequelize, Sequelize);
db.carService = require('../model/carService.model.js')(sequelize, Sequelize);
db.users = require('../model/users.model.js')(sequelize, Sequelize);
db.services = require('../model/services.model.js')(sequelize, Sequelize);
module.exports = db;