import React from 'react';
import style from './styles/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DisplayCategory from './components/DisplayCategory';
import DisplaySuppliers from './components/DisplaySuppliers';
import DisplayProducts from './components/DisplayProducts';
import ProductDescription from './components/ProductDescription';
import CategoryProducts from './components/CategoryProducts';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import ShoppingCart from './components/ShoppingCart';
import ModifyProduct from './components/ModifyProduct';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';


class App extends React.Component{

render(){
return(
  <div>  
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path="/categories"  component={ DisplayCategory } />
        <Route  path="/suppliers" component={ DisplaySuppliers }/>
        <Route path="/products" component={DisplayProducts} />
        <Route  path="/productdescription/:id" component={ ProductDescription }/>
        <Route  path="/categoryproducts/:id" component={ CategoryProducts }/>
         <Route path="/addproduct"  component={ AddProduct }/>
         <Route  path="/shoppingcart" component={ ShoppingCart }/>
          <Route path="/modifyproduct/:id"  component={ ModifyProduct }/>
          <Route path="/register" component={ RegisterUser } />
          <Route path="/login" component={ LoginUser } />
      </Switch>
      </Router>
  </div>
)

}
}

export default App;