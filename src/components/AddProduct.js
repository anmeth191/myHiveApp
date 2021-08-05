import React from 'react';
import axios from 'axios';


class AddProduct extends React.Component{
constructor(props){
super(props)

  this.state = {
     categories:[],//this array dipslay in the select tag the data is coming from the database 
     suppliers:[],//this array displays in the select tag the suppliers coming from the database
     product_name:'', //product name that is going to be saved
     product_description:'',
     product_price:'',
     product_unit:'',
     product_quantity:'',
     product_category:'',
     product_supplier:'',
     product_photo:[]
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
//controls the form when is submitted
submitHandler = (event)=>{
event.preventDefault();
//this method creates a new form data and then we append all the information we want to send to tth server
this.prepareToPost();
}

prepareToPost = async ()=>{
    //create a variable of type FormData and the append the info with the field we are sending at the server and the value
const product_data = new FormData();
// product_photo.append('product_photo', this.state.product_photo);
let { product_name } = this.state; 
let { product_description } = this.state; 
let { product_price } = this.state; 
let { product_unit } = this.state; 
let { product_quantity } = this.state; 
let { product_category } = this.state; 
let { product_supplier} = this.state; 
let { product_photo } = this.state; 
const postUrl = "http://127.0.0.1:8000/products";

product_data.append('product_name' , product_name);
product_data.append('product_description' , product_description);
product_data.append('product_price' , product_price);
product_data.append('product_unit' , product_unit);
product_data.append('product_quantity' , product_quantity);
product_data.append('product_category' , product_category);
product_data.append('product_supplier' , product_supplier);
product_data.append('product_photo' , product_photo); 

//make the POST request to the server

await axios({
    method:"post",
    url: postUrl,
    data: product_data,
    headers:{"Content-Type": "multipart/form-data"}
}).then((response)=>{ console.log(response)}).catch((error)=>{ console.log(error)})
//await axios.post('http://127.0.0.1:8000/products' , product_data).then( (response)=>{ console.log(response.data)}).catch( (error)=>{ console.log(error)})
}

componentDidMount(){
   this.getCategories();
    this.getSuppliers();
    //this.getImages();
}    
render(){
return(
    <div>
        <h1>Add a Product to your inventory</h1>
       <form onSubmit={ this.submitHandler }>      
       <div>
           <label htmlFor="product_name">Product Name:  </label>
           <input type="text" name="product_name" onChange={(event)=>{
                this.setState({product_name:event.target.value},()=>{ return this.state.product_name})
           }} />
     </div>
     <div>
           <label htmlFor="product_description">Product Description:  </label>
           <input type="text" name="product_description" onChange={(event)=>{ 
               this.setState({product_description:event.target.value},()=>{ return this.state.product_description})
           }} />
     </div>
            
     <div>
           <label htmlFor="product_price">Product Price:  </label>
           <input type="text" name="product_price" onChange={(event)=>{
               this.setState({product_price:event.target.value},()=>{ return this.state.product_price})
           }} />
     </div>

     <div>
           <label htmlFor="product_unit">Product Unit:  </label>
           <input type="text" name="product_unit" onChange={(event)=>{ 
               this.setState({ product_unit:event.target.value } , ()=>{ return this.state.product_unit })
             }} />
     </div>
           
     <div>
           <label htmlFor="product_quantity">Product Quantity:  </label>
           <input type="text" name="product_quantity" onChange={(event)=>{  
               this.setState({product_quantity:event.target.value} , ()=>{ return this.state.product_quantity })
           }} />
     </div>
               
           <div>
           <label htmlFor="product_photo">Product photo:  </label>
           <input type="file" name="product_photo" onChange={(event)=>{
               this.setState({product_photo:event.target.files[0]})
           }} />
           </div>


           <div>
           <label htmlFor="product_category">Product Category:  </label>
           <select name="product_category">
           {
               this.state.categories.map( category =>{ 
               return(
                  <option key={category.id_category} value={ category.id_category} onClick={ ()=>{
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
                  <option key={ supplier.id_supplier } value={ supplier.id_supplier } onClick={()=>{ 
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

}//end of the render
}//end of the class 

export default AddProduct;