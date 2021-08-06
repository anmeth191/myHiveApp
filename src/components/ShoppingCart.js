import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component{
constructor(props){
    super(props)
    this.state = {
       itemsCart : this.props.items,
       payment:0
    }
}

calculatePayment = ()=>{
    let pricePay = 0;
    this.state.itemsCart.forEach( element =>{ 
      pricePay += element.productPrice;
     })

     this.setState({payment: pricePay} , ()=>{ return this.state.payment})
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
                   <div key={Math.floor(Math.random() * 6 + (element.id_product))}>
                    <h3>{element.productName}</h3>
                    <h3>{element.productPrice}</h3>
                    </div>    
               )
            })
           }
            </div>
        )
    }
}

const showItemsFromProps = (state)=>{
return { items: state.itemsCart}
}
export default connect(showItemsFromProps)(ShoppingCart);