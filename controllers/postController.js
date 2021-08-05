const e = require("cors");
const multer = require("multer");
const upload = multer({Storage:multer.memoryStorage()});

const mysql = require('mysql');
const connectionDB = mysql.createConnection({
    user:'root',
    password:'1234',
    host:'127.0.0.1',
    database:'myHive'
})

module.exports = (app)=>{

app.post('/products' , (request , response) => {  

let product_name = request.body.product_name;
let product_description = request.body.product_description;
let product_price = request.body.product_price;
let product_unit = request.body.product_unit;
let product_quantity = request.body.product_quantity;
let product_category = request.body.product_category;
let product_supplier = request.body.product_supplier;
let product_photo = request.files.product_photo.data.toString('base64');


connectionDB.query(`insert into product (productName , productDescription, productPrice, productPhoto, unitProduct, productLevels, id_category, id_supplier) values ("${product_name}" , "${product_description}" , "${product_price}" , "${product_photo}" , "${product_unit}" , "${product_quantity}" , "${product_category}" , "${product_supplier}")` , (error , results ) =>{
    if(error) throw error;
    else{
      
response.json({
    message:'Your product has been has been saved'
})

}//end of the else
})//end of the query
})//end of the app post
}//end of the module