import React, {useContext} from 'react';
import { MenuContext } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


const Details = () => {
    const {detailProduct} = useContext(MenuContext);
    const {title, img, price,info} = detailProduct
    

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid image" alt="menu"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h3>Your drink is {title}</h3>
                <h4 className="text-dark">
                <strong>Price: <span>$</span>{price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">What's in your drink?</p>
    <p className="text-muted lead">{info}</p>
    <div>
        <Link to='/menu'>
            <ButtonContainer>
                back to menu
            </ButtonContainer>
        </Link>
    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;