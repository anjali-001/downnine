import React,{useContext} from 'react'
import {MenuContext} from '../context'  
import styled from 'styled-components'

function CartItems({item}) {
    const {increment,decrement} =useContext(MenuContext)
    return (
        <Func>
            <div className="container my-2 text-center">
            <div className="row text-uppercase mx-auto">
               
                <div className ="col-10 col-lg-2 mx-auto my-3 text-center pt-2 "><b>{item.title}</b></div>
                <div className ="col-10 col-lg-2 mx-auto"><img style={{width:'4rem',height:'4rem'}} src={item.img} className="img-fluid" alt="product" /></div>
                <div className ="col-10 col-lg-2 mx-auto my-3">
                <span className="d-lg-none" >PRICE : </span>
                <b>$</b> {item.price}
                </div>
                <div className ="col-10 col-lg-2 mx-auto my-3">
                <div className="d-flex justify-content-center text-center align-items-center">
                    <span className="btn func bg-dark text-light pt-2" onClick={()=>decrement(item.id)}><i class="fas fa-chevron-left"></i></span>
                    <span className="btn func" style={{fontSize:'22px'}} >{item.count}</span>
                    <span className="btn func bg-dark text-light pt-2" onClick={()=>increment(item.id)}><i class="fas fa-chevron-right"></i>

</span>
                </div>
                 </div>
                <div className ="col-10 col-lg-2 mx-auto my-3 pt-2" style={{fontSize:'25px'}}>
                <span className="d-lg-none" >TOTAL : </span>
                <b style={{textShadow: '-1px -1px 0 #ff9900, 1px -1px 0 #ff9900, -1px 1px 0 #ff9900, 1px 1px 0 #ff9900'}}>$ </b>{item.total}</div>
                
            </div>
            <hr></hr>
            </div>
        </Func>
    )
}

export default CartItems

const Func=styled.div `
font-family: 'Comic Neue', cursive;
.func{
    border:1px solid #000;
    margin:1px;
}
.func:hover{
    background:#000;
   }
b{
    font-size:23px;
}
`