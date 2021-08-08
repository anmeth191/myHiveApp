import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DisplayCategory extends React.Component{
constructor(props){
  super(props)

  this.state = {
    categories:[]
  }
} 

getCategories = async ()=>{

await axios.get('http://127.0.0.1:8000/categories').then( (response)  =>{ 
  this.setState({categories:response.data.body} , ()=>{ return this.state.categories })
}).catch( (error)=>{  console.log(error)})

}

componentDidMount(){
  this.getCategories() 
}

render(){

   return(
 <div>
    <li><Link to="/">Home</Link></li>
    {
   this.state.categories.map( category => { 
    return(
      <div key={category.id_category}>
            <Link to={`/categoryproducts/${category.id_category}`}>{category.categoryName}</Link>
      </div>
    )
   })//end of the map
    }
 </div>
    )
}
}
export default DisplayCategory;