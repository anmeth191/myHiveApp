import React from 'react';
import axios from 'axios';


class ProductDescription extends React.Component{
constructor(props){
    super(props)

   this.state = {
       id_product: this.props.match.params.id,
       product:[]
   }

}

//create the get request to get the prodcut details passing the id coming from the product component, and render into the component
productDescription = async ()=>{
    await axios.get(`http://127.0.0.1:8000/productdescription?id=${this.state.id_product}`).then( response =>{this.setState({product:response.data.body})} , ()=>{
    return this.state.product
    }).catch( error =>{ console.log(error)})
}

componentDidMount(){
this.productDescription();
}

render(){
    return(
      <div>
          {  
          this.state.product.map( product => {
                  return( 
                      <div key={product.id_product}>
                          <h1>{ product.productName }</h1>
                          <h1>{ product.productDescription }</h1>
                          <h1>Product Category: { product.id_category }</h1>
                          <img src={`data:image/jpg;base64,${product.productPhoto}`} alt="product display coming from the database" height="200px"/>
                      </div>
                  )//end of the return
              })
          }
      </div>       
    )
}
}

export default ProductDescription;