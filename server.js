//create the variable express
const express = require('express');
//variable app
const app = express();  
//require cors
const cors = require('cors');
//require http server
const httpServer = require('http');

//create my port for my app
const port = process.env.PORT || 8000;
////////////////////////////////
const getControllers = require('./controllers/getControllers');
const postController = require('./controllers/postController');
const fileUpload = require('express-fileupload');
//create an server http and give app as parameters
const server = httpServer.createServer(app);
//set my scket io configuration givin the origin my client and the port is going to listen
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage()});
app.use(express.json());
app.use(fileUpload());
app.use(`${__dirname}/public`,express.static('public'));
app.use(cors({}))
getControllers(app);
postController(app);
app.listen(port , ()=>{ console.log(`server running in port ${port}`)})



