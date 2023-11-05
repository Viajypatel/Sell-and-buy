import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css"
import CartImg from "./images/cart.png"
import ManuImg from "./images/menu.png"
import HeartImg from "./images/heart.png"
import LoginImg from "./images/login.png"
import SearchImg from "./images/search-line.png"


export default function Header() {
     return (
        <header className="header">


        <nav className="nav-bar">

            <div className="nav-bar-upper-section">

                {/* <!-- student bazaar logo --> */}

                <div className="menu-upper">

                    <div className="menu">
                        <img src={ManuImg} alt=""/>
                    </div>

                    <div className="student-bazaar-logo">

                        <h2 className="student-bazaar-logo-left">Student </h2>
                        <h2 className="student-bazaar-logo-right">
                            <pre> Bazaar</pre>
                        </h2>
                    </div>

                </div>



                {/* <!-- search bar  --> */}
                <div className="search-box">
                    <form action="" className="abc">
                        <input type="text" name="search" id="srch" placeholder="Search here..."/>

                    </form>
                </div>

                {/* <!-- side section of bar --> */}
                <div className="side-icons-section">

                    <div className="search">
                        <img src={SearchImg} alt=""/>
                        <div className="underline"></div>
                    </div>

                    <div className="Login">
                        <img src={LoginImg} alt=""/>
                        <Link to="#" className="Login-text">Login</Link>
                        <div className="Underline"></div>


                    </div>

                    <div className="Wish">
                        <img src={HeartImg} alt=""/>
                        <Link to="#" className="Wish-text">Wish</Link>
                        <div className="Underline"></div>

                    </div>

                    <div className="Cart">

                        <img src={CartImg} alt=""/>
                        <Link to="#" className="Cart-text">Cart</Link>
                        <div className="Underline"></div>

                    </div>

                </div>
            </div>
            <hr className="Break-section"/>

            <div className="nav-bar-lower-section">
                <ul className="icons">
                    <Link to="/" className="Home">Home</Link>
                    <Link className="Home">Books</Link>
                    <Link className="Home">Electronics</Link>
                    <Link className="Home">Furniture</Link>
                    <Link className="Home">Other</Link>
                    <Link to='/Contactus' className="Home">Contact us</Link>
                    <Link to="/about" className="Home">About us</Link>

                </ul>
            </div>
        </nav>

    </header>
     );
}