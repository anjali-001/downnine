import React, {Component} from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render(){
    return (
        <NavWrapper className="navbar navbar-expand-lg  navbar-dark px-sm-5">
            <Link to='/'>
                <img src={logo} alt="downNine" className="navbar-brand"/>
            </Link>

            <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul>
            <li>
            <Link to='/' className="navbar-nav nav-item nav-link align-items-center">
               Home 
            </Link>
            </li>
            <li>
            <Link to='/Menu' className="navbar-nav nav-item nav-link align-items-center">
               Menu
            </Link>
            </li>
            <li>
            <Link to='/About' className="navbar-nav nav-item nav-link align-items-center">
               About
            </Link>
            </li>
            <li>
            <Link to='/Contact' className="navbar-nav nav-item nav-link align-items-center">
               contact
            </Link>
            </li>
            </ul>
            </div>
            <Link to='/Cart' className="ml-auto">
                <ButtonContainer className="nav-item">
                     Check Please!
                </ButtonContainer>
            </Link>
            
        </NavWrapper>
    )
}
}


const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    padding-left: 2rem;
    padding-right: 0.5rem;
    color: var(--lightYellow);
    font-size:1.3rem;
    text-transform: capitalize;
    
}
.nav-link:hover{
    color:var(--darkYellow);
}
li{
    
    float: left;
    
}
ul{
    
    list-style-type: none;
    margin:0 0 0 50%;
    padding: 0;
    overflow: hidden;
}
.navbar-brand{
    width: 250px;
    height:70px;
    padding:0;
}




`

