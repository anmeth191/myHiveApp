import React from 'react';
import { connect } from 'react-redux';
class ShoppingCart extends React.Component{
constructor(props){
    super(props)
    this.state = {
       itemsCart : this.props.items,
       payment:0, 
       updateQuantity:1,
    }
}

calculatePayment = ()=>{
    let totalPay = 0;
    
    this.state.itemsCart.forEach( element =>{ //
        totalPay += element.payment;
    })
      this.setState({payment: totalPay} , ()=>{ return this.state.payment})
}

controlQuantity = (operation)=>{
    if(operation === 'substract'){
        this.setState({updateQuantity: this.state.updateQuantity - 1})
     }else 
     if(operation === 'add'){
      this.setState({updateQuantity:this.state.updateQuantity + 1})
     }
}

// this function controls the quantity of the product in case that the customer decides to reduce or increment a product in the cart
// the quantity pamater: is the actual quantity for the element that needs to be updated
// the id is the current id of the element in the model that needs to be looped and the updated
// the opertion parameter tell the function if the actual quantity needs to be added or substracted

updateQuantity =   (id)=>{

let changeItemQuantity = this.state.itemsCart.find( (element) =>{ 
    return element.items.id_product === id
})

this.props.updateItem(this.state.updateQuantity , changeItemQuantity.items.id_product )

}
componentDidMount(){
this.calculatePayment();
}
render(){
    return( 
        <div> 
            <h1>Total: {`${this.state.payment}.00 $`}</h1>
           { 
            this.state.itemsCart.map( element =>{
                       return(
                   <div key={Math.floor(Math.random() * 1000000) + 1}>
                    <h3>{element.items.productName}</h3>
                    <h3>{element.items.productPrice}</h3>
                    <div>
                    <button className="restQuantity"  onClick={()=>{ /*send the quantity and the ID to a controller function to increment or decrement the quantity , also the message rest or add is the condition to update the number */
                       this.controlQuantity('substract')
                       this.updateQuantity(element.items.id_product)

                       }}>-</button> 
                    <span>quantity:{element.quantity}</span>
                    <button className="addQuantity" onClick={()=>{ /*send the quantity and the ID to a controller function to increment or decrement the quantity , also the message rest or add is the condition to update the number */
                       this.controlQuantity('add')
                       this.updateQuantity(element.items.id_product)
                       }}>+</button>
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
    updateItem: (updatequantity , item)=>{ dispatch({ type:'UPDATE_ITEM' , updatequantity , item})}
     }

}
export default connect(showItemsFromProps, updateItemsProps)(ShoppingCart);