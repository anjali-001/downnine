import React from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'


function EmptyCart() {
    return (
        <Err className="text-center ">
                   <h1>THE CART IS EMPTY<br />
                    Head Back To </h1> <Link to="/" className="btn "> Store Menu </Link>
         </Err>
    )
}

export default EmptyCart

const Err=styled.div `
    padding-top :35vh;
    overflow-X:hidden;
 .btn{
     color:#ff9900 !important;
     border: 2px solid #ff9900 !important;
     font-size: 30px;
     font-weight:700;
        letter-spacing:3px;
 }
 .btn:hover{
    background:#ff9900 !important;
    color:#000 !important;
    font-weight:700;
 }

`