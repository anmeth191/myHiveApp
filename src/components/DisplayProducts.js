import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DisplayProducts extends React.Component{
    constructor(props){
super(props);

this.state = {
    products:[],
    idModify:0
}
    }
showProducts = async ()=>{
 await axios.get('http://localhost:8000/products').then( response =>{ 
     this.setState({products:response.data.body} , ()=>{ return this.state.products})
    }).catch((error)=>{ console.log(error)});
}

componentDidMount(){
    this.showProducts();
}    

render(){
return(
<div>
    <h1>Add a product to your inventory</h1>
    <Link to="/addproduct">Add Product</Link>

<h1>Products availables</h1>
{   
(this.state.products.length === 0) ? <h1 key="no" >DataBase is empty</h1> : 
this.state.products.map( product => {
    return(
        <div key={ product.id_product}>
         <Link to={`/productdescription/${product.id_product}`}> { product.productName } </Link>
         <img src={`data:image/jgp;base64,${product.productPhoto}`} height="100px" alt="displaying from the database"/>
           <Link to={`/modifyproduct/${product.id_product}`}>Modify</Link>
           <Link to={`/deleteproduct/${product.id_product}`}>Delete</Link>
         </div> 
         )
})
}

</div>
)
}//end of the render method
}

export default DisplayProducts;