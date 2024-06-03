let router = require("express").Router();
const qareea=require("../controllers/qareeaController");
const API_QORRAA_PATH="/qareea";
router.get(`${API_QORRAA_PATH}/getAllQorraa` ,qareea.getAllQorraa);
router.get(`${API_QORRAA_PATH}/getQareeaByID` ,qareea.getQareeaByID);

module.exports =router; 
