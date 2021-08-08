import React from 'react';
import AddProduct from '../components/AddProduct';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DisplayProducts extends React.Component{
    constructor(props){
super(props);

this.state = {
    products:[]
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
<h1>Products availables</h1>
{   
(this.state.products.length === 0) ? <h1 key="no" >DataBase is empty</h1> : 
this.state.products.map( product => {
    return(
        <div key={ product.id_product}>
         <Link to={`/productdescription/${product.id_product}`}> { product.productName } </Link>
         </div>
  )
})
}

<AddProduct />
</div>
)
}//end of the render method
}

export default DisplayProducts;