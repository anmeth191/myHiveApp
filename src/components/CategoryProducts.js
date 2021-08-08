import React from 'react';
import axios from 'axios';



class CategoryProducts extends React.Component{
constructor(props){
    super(props)

    this.state = {
        id_category:this.props.match.params.id,
        products:[]
    }
}

getProductsByCategory = async ()=>{
 
await axios.get(`http://localhost:8000/categoryproducts?category=${this.state.id_category}`).then( response =>{ 
console.log(response.data)
}).catch( error =>{ console.log(error)})

}

componentDidMount(){
this.getProductsByCategory();
}

render(){
    return(
        <div>
          {this.state.id_category}
            </div>
    )
}

}

export default CategoryProducts;