import React, { useContext } from 'react';
import {ButtonContainer} from './Button';
import {DataContext} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Home = () => {
    const {generateTitle,randomTitle} = useContext(DataContext);
    
    return ( 
        <HomeGameWrapper className="container col-lg-6 col-sm-10 text-center mx-auto" >
                <h4>Having trouble deciding your drink? Let your fate choose for you.</h4>
                <p>Click below to see what's your cocktail.</p>
                <div>
                <ButtonContainer onClick={()=>generateTitle()}>click</ButtonContainer>
                </div>
                <Link to='/details'>
                <h3>{randomTitle}</h3>
                </Link>
                
                

                
            </HomeGameWrapper>
     );
}
 
export default Home;

const HomeGameWrapper = styled.div`
{
    padding: 20px;
    background: var(--mainGrey);
    color: var(--mainWhite);
    border: 3px solid var(--lightYellow);
    margin-top: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
}
p{
    text-align:center;
}

h3{
    color:var(--lightYellow);
    text-align:center;
    text-transform:uppercase;
    
}
h3:hover, Link:hover{
    text-decoration:none !important;
}
div{
    text-align:center;
}

`
