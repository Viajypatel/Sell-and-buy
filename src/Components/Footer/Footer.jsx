import React from 'react'
import {  Link } from 'react-router-dom'
import   "./Footer.css"

export default function Footer() {
  return (
    <>
       <footer>
        <div className="footer1">
            <div className="names">
                <div className="logo2">
                    EmpoweringSecondhand<span style={{color: "white"}}>Exchange</span>
                </div>
                <div className="content1">
                    <div className="item10">
                        <div><Link to="#">Books</Link></div>
                        <div><Link to="#">Calculator</Link></div>
                        <div><Link to="#">Electronics</Link></div>
                        <div><Link to="#">Furniture</Link></div>
                        <div><Link to="#">Sports</Link></div>
                    </div>
                    <div className="item10">
                        <div>Location</div>
                        <div>Near jankipuram</div>
                        <div>IET Lucknow</div>
                        <div>Contact</div>
                        <div>6386082542</div>
                        <div>9917642204</div>
                    </div>
                </div>
            </div>

            <div className="line-lower-footer">
                <hr id="line"/>

            </div>

            <div className="LinksBelow">



                <div className="copyrights">
                    <h1>&copy;Empowering Secondhand Exchange</h1>
                </div>





                <div className="handles">
                    <Link to="https://www.whatsapp.com/" className="fa fa-whatsapp"></Link>
                    <Link to="https://web.telegram.org/" className="fa fa-telegram"></Link>
                    <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
                    <Link to="https://www.instagram.com/" className="fa fa-instagram"></Link>
                    <Link to="https://www.Linkedin.com/" className="fa fa-Linkedin"></Link>
                </div>



            </div>
        </div>

    </footer>
    </>
  )
}

 
