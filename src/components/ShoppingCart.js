import React from 'react';


class ShoppingCart extends React.Component{
constructor(props){
    super(props)
    this.state = {
  
    }
}

render(){
  console.log(this.props)
    return(
        <div>
            Hello from the render
            </div>
    )
}
}


export default ShoppingCart;