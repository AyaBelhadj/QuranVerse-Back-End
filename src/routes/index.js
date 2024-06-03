const express = require("express")
const testRoutes=require("./test.routes")
const qareeaRoute=require("./qareea.routes")
const surasRoute=require("./sura.routes")
const routers=express()//instance de l'express
routers.use([testRoutes,qareeaRoute,surasRoute])





module.exports=routers;