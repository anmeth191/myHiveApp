import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
this.setState({products:response.data.body})
}).catch( error =>{ console.log(error)})

}

componentDidMount(){
this.getProductsByCategory();
}

render(){
    return(
        <div>
            <h1>ID CATEGORY</h1>
          {
          this.state.products.map( product =>{
            return (
               <div key={ product.id_product}>
                   <h1> <Link to={`/productdescription/${product.id_product}`}>{product.productName}</Link></h1>
                   <img src={`data:image/jpg;base64,${product.productPhoto}`} height="200px" alt="products saved in database"/>
                   </div>
             )
          })
          
          }
            </div>
    )
}

}

export default CategoryProducts;