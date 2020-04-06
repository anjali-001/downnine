import React, {Component,useContext} from 'react';
import {DataContext} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Menu = ({item}) => {
    const {handleDetail} = useContext(DataContext);
    const {id,img,price,title} = item
    return (
    <MenuWrapper className="container col-12 col-md-6 col-lg-4"  >
        <div>
            <div className="card">
                        <div className="img-container p-5" onClick={()=>handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt='cocktail' className="card-img-top img-fluid"/>
                            </Link>
                            <div className="card-footer d-flex justify-content-between bg-dark text-light">
                            <h5 className="mb-0"><span className="mr-1">$</span>
    {price}</h5>
    <p className="align-self-center mb-0">{title}</p>
    <button className="cart-btn">
        <Link to="/cart" className="cart-btn">
        <i className="fas fa-cart-plus"/>
        </Link>
    </button>
                            </div>
                        </div>
            </div>
        </div>
        
    </MenuWrapper>
    )
}

export default Menu
// import React ,{useContext} from 'react'
// import {DataContext} from '../context'
// function Menu() {
//     const {hello} = useContext(DataContext);
//     const res=hello?"hi":"hello"
//     return (
// <div>{console.log(res)}</div>
        
//     )
// }

// export default Menu


const MenuWrapper = styled.div`
.card{
    border-color:transparent;
}
.card-footer{
    background: var(--mainDark)!important;
    color: var(--lightYellow)!important;
}
&:hover{
    .card{
        border:0.04rem solid rgb(230, 138, 0);
    }
}
.img-container{
    position: relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    trasnform:scale(1.2);
}

.cart-btn{
    background: var(--mainDark);
    color: var(--lightYellow);
    border-color: var(--lightYellow);

}
.cart-btn:hover {
    color: var(--darkYellow);
    border-color: var(--darkYellow);
}
`
