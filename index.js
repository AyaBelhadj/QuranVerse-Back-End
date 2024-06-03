//require("dotenv").config();
const express = require('express');
const routers = require('./src/routes');
const app = express();
const x=require("./src/controllers/testController")
const http = require("http");
const cors = require("cors");
//app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/',routers)
const server = http.createServer(app);

const port = 5700;
server.listen(port, () => {
  console.log('Listening on port ' + port);
});
// server.post('/Touta_Ahmed', x.updatePassword);


const db = require("./src/models");
db.sequelize.sync({ alter: false });
