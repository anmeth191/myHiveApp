import React from 'react';
import axios from 'axios';


class ModifyProduct extends React.Component{
constructor(props){
    super(props)
     this.state = {
         id:this.props.match.params.id,
         categories:[],//this array dipslay in the select tag the data is coming from the database 
         suppliers:[],//this array displays in the select tag the suppliers coming from the database
         product_name:'', //product name that is going to be saved
         product_description:'',
         product_price:'',
         product_unit:'',
         product_quantity:'',
         product_category:'',
         product_supplier:'',
         product_photo:[], 
         productToModify:[] //this is the product that is going to be modified and then sent to the database
     }
}

//this method makes a request to the API and gets the data from the server then set the state and is rendered in the select tag in options
getCategories = async ()=>{
    await axios.get('http://127.0.0.1:8000/categories').then( response =>{
    this.setState({ categories:response.data.body} , ()=>{ return this.state.categories})
    })
    }
    
    //this method makes a request to the API and gets the data from the server then set the state and is rendered in the select tag in options
    getSuppliers = async ()=>{
        await axios.get('http://127.0.0.1:8000/suppliers').then( response =>{
        this.setState({ suppliers:response.data.body} , ()=>{ return this.state.suppliers})
        })
        }


    productModifyGet = async ()=>{
        //send the id of the product to the API in order to fetch the correct data from the database
       axios.get(`http://127.0.0.1:8000/modifyproduct?id=${this.state.id}`).then( response =>{


          this.setState({product_name:response.data.body[0].productName})
          this.setState({product_description:response.data.body[0].productDescription})
          this.setState({product_price:response.data.body[0].productPrice})
          this.setState({product_unit:response.data.body[0].unitProduct})
          this.setState({product_quantity:response.data.body[0].productLevels})
          this.setState({product_photo:response.data.body[0].productPhoto})
          this.setState({product_category:response.data.body[0].id_category})
          this.setState({product_supplier:response.data.body[0].id_supplier})
      
      
      
        }).catch( error =>{ console.log(error)} );

    }    

submitHandler = (event)=>{
    event.preventDefault();
    console.log(this.state)
}

componentDidMount(){
    this.getCategories();
    this.getSuppliers();
    this.productModifyGet();
}

render(){   
return(
    <div>
    <h1>Modify Product</h1>
   <form onSubmit={ this.submitHandler }>      
   <div>
       <label htmlFor="product_name">Product Name:  </label>
       <input type="text" name="product_name" value={this.state.product_name} onChange={(event)=>{
            this.setState({product_name:event.target.value},()=>{ return this.state.product_name})
       }} />
 </div>
 <div>
       <label htmlFor="product_description">Product Description:  </label>
       <input type="text" name="product_description" value={this.state.product_description} onChange={(event)=>{ 
           this.setState({product_description:event.target.value},()=>{ return this.state.product_description})
       }} />
 </div>
        
 <div>
       <label htmlFor="product_price">Product Price:  </label>
       <input type="text" name="product_price" value={this.state.product_price} onChange={(event)=>{
           this.setState({product_price:event.target.value},()=>{ return this.state.product_price})
       }} />
 </div>

 <div>
       <label htmlFor="product_unit">Product Unit:  </label>
       <input type="text" name="product_unit" value={this.state.product_unit} onChange={(event)=>{ 
           this.setState({ product_unit:event.target.value } , ()=>{ return this.state.product_unit })
         }} />
 </div>
       
 <div>
       <label htmlFor="product_quantity">Product Quantity:  </label>
       <input type="text" name="product_quantity" value={this.state.product_quantity} onChange={(event)=>{  
           this.setState({product_quantity:event.target.value} , ()=>{ return this.state.product_quantity })
       }} />
 </div>
           
     


       <div>
       <label htmlFor="product_category">Product Category:  </label>
       <select name="product_category" >
       {
           this.state.categories.map( category =>{ 
           return(
              <option key={category.id_category} value={this.state.product_category} onChange={ ()=>{
                  this.setState({product_category: category.id_category})
              }} >{category.categoryName}</option>
                  )
               })
       }   
       </select>
       </div>

       <div>
       <label htmlFor="product_supplier">Product Supplier:  </label>
       <select name="product_supplier">
       {
           this.state.suppliers.map( supplier =>{ 
           return(
              <option key={ supplier.id_supplier } value={ supplier.id_supplier } onChange={()=>{ 
                  this.setState({product_supplier: supplier.id_supplier } , ()=>{ return this.state.product_supplier})
              }}>{supplier.supplierName}</option>
          )
        })
       }   
       </select>
       </div>

       
         <div>
         <button  type="submit">Submit Product</button>
         </div>

       </form>



</div>
)
}
}


export default ModifyProduct;