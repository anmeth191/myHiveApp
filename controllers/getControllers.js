
const fileUpload = require('express-fileupload');
const mysql = require('mysql');
const fs = require('fs');
const e = require('cors');
let image = [];
const connectionDB = mysql.createConnection({
     host:'127.0.0.1',
     user:'root',
     password:'1234',
     database:'myHive'
});

let categoriesDB = {};
let supplierDB = {};
let productDB = {};

module.exports = (app) => {

    //handling the get request to display the caregories in the db
app.get('/categories' , (request , response )=>{
 connectionDB.query('SELECT * FROM category' , (error , resultsDB )=>{ 
     if(error) throw error;
     else { categoriesDB = JSON.parse(JSON.stringify(resultsDB))}
})
   response.json({
    message:'your request has been completed',
    body: categoriesDB
   })
})

//handling the request to display the suppliers in the database
app.get('/suppliers' , (request , response )=>{
    connectionDB.query('SELECT * FROM supplier' , (error , resultsDB )=>{ 
        if(error) throw error;
        else { supplierDB = JSON.parse(JSON.stringify(resultsDB))}
   })
      response.json({
        message:'your request has been completed',
          body: supplierDB
      })
   })
   
//handling the get request from the client to display all the products in the database
app.get('/products' , (request , response) =>{
connectionDB.query('select * from product' , (error , result)=>{

    if(error)throw error;
    else{
            
response.json({
    message:'your request has been completed',
    body:JSON.parse(JSON.stringify(result))
      })
    }
})


})//end of the get for the products

//handling the get request to display the product details
app.get('/productdescription' , (request , response )=>{
  const id_product = parseInt(request.query.id);

connectionDB.query(`select * from product where id_product = ${id_product}` , (error , result) =>{ 

  if(error) throw error;
  else{
      response.json({
       message:'your request has been done',
       body: JSON.parse(JSON.stringify(result))
      })
     }

})
})


app.get('/categoryproducts' , (request , response) =>{ 

  const id_category = request.query.category;
  connectionDB.query(`select * from product where id_category = ${id_category}` , (error , result) =>{
    if(error) throw error;
    else{
       response.json({
         message:'your request has been submiteed',
         body: JSON.parse(JSON.stringify(result))
       })
    }
  })

})
}//end of the app