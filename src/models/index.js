const { Sequelize } = require("sequelize");
const dbConfig = require("../db/db.config.js");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.reciters = require("./qareea.js")(sequelize, Sequelize);
db.surah = require("./suras.js")(sequelize, Sequelize);

db.reciters.hasMany(db.surah,/*{as :"suraurl"}*/);

module.exports = db;
