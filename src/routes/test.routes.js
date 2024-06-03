let router = require("express").Router();
const x=require("../controllers/testController")
router.get("/Youtche",x.updatePassword)


module.exports =router; 
