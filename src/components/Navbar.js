import React from 'react';
import { Link } from 'react-router-dom';


const  Navbar = ()=>{
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/categories">categories</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/suppliers">Supplier</Link></li> 
                    <li><Link to="/shoppingcart">Cart</Link></li> 
                    </ul>
                </nav>
            </div>
    )
}
export default Navbar;