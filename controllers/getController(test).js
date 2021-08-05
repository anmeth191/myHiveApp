// const { response } = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const parserUrlenCoded = bodyParser.urlencoded({ extended: false })

// const socketIo = require('socket.io')(8080 , {  cors:{
//     origin:["http://localhost:3000"],
//     methods:["GET" , "POST"]
// }})


// const connectionDB = mysql.createConnection({
//     host:'127.0.0.1',
// //     user:'root',
// //     password:'1234',
// //     database:'myHive',
// // })

// // let queryResults = {};


// // module.exports = (app)=> {

// //  /*Handle the request for the home component where it displays the categories*/ 
// //  app.get('/' , (request , response) =>{
// // response.send('<h1>Welcome from the server</h1>')

// // })//end of the get /
// // socketIo.on('connection' , (socket)=>{
// // setInterval(() => {   
// // connectionDB.query('SELECT * FROM category' , (error , results)=>{
// // if(error === true) throw error;
// // else{ queryResults = JSON.parse(JSON.stringify(results)); }
// // })//end of the connectiondb
// // socketIo.emit('show-category' , queryResults)
// // },1000)
  
// //     socket.on('post-category' , (data)=>{ 
// //     connectionDB.query(`INSERT INTO category (categoryName) VALUES ('${data}')`)
// //       });   
// //     socket.on('disconnect' , ()=>{
// //         console.log('disconnect')
// //     })

// // })


// // }//end of the module 

// //review
// //require socket io and set the cors to allow communication with the client and the server
// const socketIo = require('socket.io')(8080,{ cors:{
// origins:["http://localhost:3000/"],
// methods:["GET" , "POST"]
// }//end of the cors  
// })
// //require mysql
// const mysql = require('mysql');
// //connect to the database
// const connectionDatabase =  mysql.createConnection({
//     user:'root',
//     password:'1234',
//     host:'127.0.0.1',
//     database:'myHive'
// })
// let queryResults = {};
// module.exports = (app) =>{


// app.get('/' , (request , response ) =>{
//      response.send("<h1>Hello from the server side</h1>")
// })

// socketIo.on("connection" , (socket)=>{

// //set interval to refresh the query every second
//    setInterval(()=>{
// //create the query for the category table
//      connectionDatabase.query('SELECT * FROM category' , (error , results)=>{
//          if(error) throw error;
//          else{
//              //convert the results from the query in JSON format 
//           queryResults = JSON.parse(JSON.stringify(results))
//          }

//      })
//      //emit into show-category every second so the client will receive the data refreshed from the database passing the query results
//      socketIo.emit('show-category' , queryResults);
//    } , 1000)

//   //when the client send a new category the socket recieves the event and insert the new data into the database
//     socket.on('post-category' , (data) =>{
//          connectionDatabase.query(`INSERT INTO category (categoryName) VALUES ("${data}")`)                
//     })

//     socket.on("disconnect" , ()=>{
//         console.log("disconect")
//     })
// })
// }