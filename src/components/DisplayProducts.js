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
<div className="displayProductsGlobal">    
<div className="displayProducts">
{   
(
this.state.products.length === 0) ? <h1 key="no" >...Loading</h1> : 
this.state.products.map( product => {
    return(

        <div className="displayProducts__container"  key={ product.id_product}>
        <Link className="linkPhoto" to={`/productdescription/${product.id_product}`}>
         <div  className="displayProducts__container__photo">
         <img  className="displayProducts__container__photo-image" src={`data:image/jgp;base64,${product.productPhoto}`} height="100px" alt="displaying products in our store"/>
         </div>
         <div className="displayProducts__container__information">
         <h3 className="displayProducts__container__information-price">${product.productPrice}.00</h3>
         <span className="displayProducts__container__information-name">{product.productName}</span>
         <span className="displayProducts__container__information-unit">{product.unitProduct}</span>
         </div>
       </Link>

       <button className="displayProducts__container__button button" >Add to Cart</button>
        </div> 
  )
 })
}
</div>
</div>
)
}//end of the render method
}

export default DisplayProducts;