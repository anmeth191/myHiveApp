import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component{
constructor(props){
    super(props)
    this.state = {
       itemsCart : this.props.items,
       payment:0, 
       refreshQuantity:0
    }
}

calculatePayment = ()=>{
    let totalPay = 0;
    
    this.state.itemsCart.forEach( element =>{ //
        totalPay += element.payment;
    })
      this.setState({payment: totalPay} , ()=>{ return this.state.payment})
}
//increment or decrement the quantity


// this function controls the quantity of the product in case that the customer decides to reduce or increment a product in the cart
// the quantity pamater: is the actual quantity for the element that needs to be updated
// the id is the current id of the element in the model that needs to be looped and the updated
// the opertion parameter tell the function if the actual quantity needs to be added or substracted

componentDidMount(){
this.calculatePayment();

}
render(){
    return( 
        <div> 
            <h1>Total: {`${this.state.payment}.00 $`}</h1>
           { 
            this.state.itemsCart.map( (element , index) =>{
                       return(
                   <div key={Math.floor(Math.random() * 1000000) + 1}>
                    <h3>{element.items.productName}</h3>
                    <h3>{element.items.productPrice}</h3>
                    <div>
                    <span>{element.quantity}</span>
                    </div>
                    <h3>total:{element.payment}</h3>
                    
                    </div>    
               )
            })
           }
            </div>
        )
    }
}

const showItemsFromProps = (state)=>{
return { items: state.itemsCart }
}


const updateItemsProps = (dispatch)=>{

return { 
    updateItem: (updatequantity , itemIndex)=>{ dispatch({ type:'UPDATE_ITEM' , updatequantity , itemIndex})}
     }

}
export default connect(showItemsFromProps, updateItemsProps)(ShoppingCart);