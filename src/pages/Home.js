import React, { useContext } from 'react';
import img1 from '../carousal/2.jpg'
import review from '../carousal/review.jpeg'
import {ButtonContainer} from '../components/Button';
import {MenuContext} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const Home = () => {
    const {generateTitle,randomTitle} = useContext(MenuContext);
    
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-12 col-md-7 align-item-center col-lg-7 mx-auto pt-3">
                        <img src={img1} className="" style={{width:'100%',height:'100%'}} alt="drink" />
                    </div>




                    <div className="col-12 col-md-5 col-lg-5 mx-auto pt-3">
                        <div className="row m-md-2 p-md-5 mt-md-5 mt-sm-3 mb-3">
                            <div className="col-4 col-md-2 ">
                                <div className="bg-dark mx-auto" style={{width:'100px',height:'100px',borderRadius:'50%'}}><img src={review} style={{width:'100px',height:'100px',borderRadius:'50%'}} alt="" /></div>
                            </div>
                            <div className="col-8 col-md-10 mt-1">
                                <p><i className="fas fa-quote-left"></i> Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>
                        </div>
                        <div className="row m-md-2 p-md-5 mt-3">
                        <div className="col-4 col-md-2">
                                <div className="bg-dark mx-auto" style={{width:'100px',height:'100px',borderRadius:'50%'}}><img src={review} style={{width:'100px',height:'100px',borderRadius:'50%'}} alt=""/></div>
                            </div>
                            <div className="col-8 col-md-10 mt-1">
                                <p><i className="fas fa-quote-left"></i> Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Amazing varieties of drinks.bfhvbdhvbhbvhbavhbnckjnsajnsakjnjkn</p>
                            </div>
                            
                        </div>   
                         
                           
                       
                    </div>
                </div>
            </div>

             <HomeGameWrapper className="container col-lg-6 col-sm-10 text-center mx-auto m-5" >
                <h4>Having trouble deciding your drink? Let your fate choose for you.</h4>
                <p>Click below to see what's your cocktail.</p>
                <div>
                <ButtonContainer onClick={()=>generateTitle()}>click</ButtonContainer>
                </div>
                <Link to='/details'>
                <h3>{randomTitle}</h3>
                </Link>
                
                

                
            </HomeGameWrapper>
            </React.Fragment>

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

