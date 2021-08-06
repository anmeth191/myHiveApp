import React from 'react';
import { connect } from 'react-redux';
let totalPay = 0;

class ShoppingCart extends React.Component{
constructor(props){
    super(props)
    this.state = {
       itemsCart : this.props.items,
       payment:0
    }
}

calculatePayment = ()=>{
    let amountPay = 0;
    this.state.itemsCart.forEach( element =>{ 
      totalPay = element.items.productPrice * parseInt(element.quantity)
    })

     this.setState({payment: totalPay} , ()=>{ return this.state.payment})
}

componentDidMount(){
this.calculatePayment();
}
render(){
    console.log(this.state.itemsCart)
    return( 
        <div> 
            <h1>Total: {`${this.state.payment}.00 $`}</h1>
           { 
            this.state.itemsCart.map( element =>{
                       return(
                   <div key={Math.floor(Math.random() * 1000000) + 1}>
                    <h3>{element.items.productName}</h3>
                    <h3>{element.items.productPrice}</h3>
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