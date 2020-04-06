import React from 'react'
import img from '../logo.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <NavElement>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src={img} className="navbar-brand img-fluid" alt="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto mx-auto ">
                     <Link to="/" className="nav-item nav-link mx-4 active nounderline" href="#">Home <span className="sr-only">(current)</span></Link>
                     <Link to="/menu" className="nav-item nav-link mx-4" href="#">Menu</Link>
                     <Link to="/contact" className="nav-item nav-link mx-4" href="#">Contact Us</Link>
                     <Link to="/about" className="nav-item nav-link mx-4" href="#">About</Link>   
                     <Link to="/cart" className="nav-item nav-link mx-4 " href="#">Cart</Link>
                </div>
                </div>
            </nav>
            
        </NavElement>
    )
}

const NavElement =styled.nav `
.nav-item{
color:#ff9900 !important;
text-decoration:none !important;
font-weight:700 !important;
font-size:25px

}
.nav-item:hover{
        color:#fff !important;
    }
.navbar-brand{
    width:250px;
    height:70px;
    padding:0
}
`
