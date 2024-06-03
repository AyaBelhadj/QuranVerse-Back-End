let router = require("express").Router();
const qareea=require("../controllers/surasController");
const API_SURAS_PATH="/suras";
router.get(`${API_SURAS_PATH}/getSuraByID` ,qareea.getSuraByID);
router.get(`${API_SURAS_PATH}/getAllSuras` ,qareea.getAllSuras);
router.get(`${API_SURAS_PATH}/getSuraURLs` ,qareea.getSuraURLs);
router.get(`${API_SURAS_PATH}/getURLBySura` ,qareea.getURLBySura);

module.exports =router; 
