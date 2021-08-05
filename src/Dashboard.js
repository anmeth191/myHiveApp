import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component{

    render(){
        return(
            <div>
            <Link to="/categories">Categories</Link>
            <Link to="/products">Products</Link>
            <Link to="/suppliers">Suppliers</Link>
            </div>
            )
         }


}

export default Dashboard;