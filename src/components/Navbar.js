import React from 'react';
import { Link } from 'react-router-dom';


const  Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="navbar__container">

            <div className="navbar__container__title">
            <h2 className="navbar__container__title__h2">
                <Link className="navbar__container__title__h2--link" to="/">Dashboard</Link></h2> 
            </div>

            <nav className="navbar__container__nav">  
                <ul className="navbar__container__nav__ul">
                    <li className="navbar__container__nav__ul--li">
                        <Link className="navbar__container__nav__ul--li--link" to="/categories">categories</Link>
                        </li>
                    <li className="navbar__container__nav__ul--li">
                        <Link  className="navbar__container__nav__ul--li--link" to="/products">Products</Link>
                        </li>
                    <li className="navbar__container__nav__ul--li">
                        <Link className="navbar__container__nav__ul--li--link" to="/suppliers">Supplier</Link>
                        </li> 
                    <li className="navbar__container__nav__ul--li">
                        <Link className="navbar__container__nav__ul--li--link" to="/shoppingcart">Cart</Link>
                    </li> 
                    </ul>
                </nav>
            </div>
            </div>
    )
}
export default Navbar;