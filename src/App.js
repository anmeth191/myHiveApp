import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import DisplayCategory from './components/DisplayCategory';
import DisplaySuppliers from './components/DisplaySuppliers';
import DisplayProducts from './components/DisplayProducts';
import ProductDescription from './components/ProductDescription';
import CategoryProducts from './components/CategoryProducts';
class App extends React.Component{

render(){
return(
  <div>  
    <Router>
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path="/categories"  component={ DisplayCategory } />
        <Route  path="/suppliers" component={ DisplaySuppliers }/>
        <Route path="/products" component={DisplayProducts} />
        <Route  path="/productdescription/:id" component={ ProductDescription }/>
        <Route  path="/categoryproducts/:id" component={ CategoryProducts }/>

      </Switch>
      </Router>
  </div>
)

}
}

export default App;