import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductDescription extends React.Component{
constructor(props){
    super(props)

   this.state = {
       id_product: this.props.match.params.id,
       product:[],
       itemsCart:0,
       cartItems:[]
   }

}

//create the get request to get the prodcut details passing the id coming from the product component, and render into the component
productDescription = async ()=>{
    await axios.get(`http://127.0.0.1:8000/productdescription?id=${this.state.id_product}`).then( response =>{this.setState({product:response.data.body})} , ()=>{
    return this.state.product
    }).catch( error =>{ console.log(error)})
}


 //Create a function that controls the items are pushed into the cart
shoppingCartControl = async (productAdded) => {

const addProduct = await this.state.product.find( element =>{ 
return element.id_product === productAdded
})

this.setState({cartItems:addProduct});
console.log(this.props.items)

//this method coming from the function saveIntoCart 
//call the addCart that is going to send the information to my redux reducer and and save it into the Shopping Cart component
//passing the state.cartItmes as prop to save everyelement that is added 
this.props.addCart(this.state.cartItems);
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
                          <span>{ product.productDescription }</span>
                          <h5>Product Category: { product.id_category }</h5>
                          <h5>{`${parseInt(product.productPrice)}.00 $`}</h5>
                          <h5>{` Inventory levels: ${product.productLevels}`}</h5>
                          <img src={`data:image/jpg;base64,${product.productPhoto}`} alt="product display coming from the database" height="200px"/>
                          <button onClick={()=>{this.shoppingCartControl(product.id_product)}} >Add to the cart</button>
                      </div>
                  )//end of the return
              })
          }
      </div>       
    )
}
}

//show the items into the reducer
const showItemsCart = (state) =>{
 return { items: state.itemsCart }
}

//this is my redux method that is going to dispatch the action addCart to the reducer 
const saveIntoCart = (dispatch)=>{

    return {
        addCart:(item)=>{ dispatch({ type:'ADD_ITEM' , item})}
    }
}
export default connect(showItemsCart,saveIntoCart)(ProductDescription);