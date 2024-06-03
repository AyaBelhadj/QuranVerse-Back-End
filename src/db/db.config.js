//require("dotenv").config();
module.exports = {
  HOST: '41.224.12.229',
  PORT:'3306',
  USER: 'quranapp',
  PASSWORD: 'hD5tz3CQAwQnbTek', //process.env.API_DB_PWD,
  DB: 'quranapp',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // retry: {
  //   match: [/Deadlock/i],
  //   max: 3, // Maximum rety 3 times
  //   backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
  //   backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  // },

};
