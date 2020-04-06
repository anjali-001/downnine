import React from 'react'
import styled from 'styled-components'


function ContactUS() {
    return (
        <React.Fragment className="bg-dark" >
        <div className="lineC"></div>
        <Err className=" text-center ">
            
                <div  className="row ">
                <div className="col-10 col-md-4 ml-auto mx-auto my-auto bg-dark p-4 text-light">
                   <b style={{color:'#ff9900',lineHeight:'50px'}}><em><u> Reach Out To Us At: </u></em> </b><br></br><br></br>
                    00,XYZ,NEWTOWN<br></br>
                    KOLKATA-700017<br></br>
                    <br>

                    </br>
                    Ph no: XXX-XXX-XXXX<br></br><br></br>
                </div>
                <div className="col-10 col-md-4 mr-auto mx-auto my-3">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.56300121424!2d88.04954272646204!3d22.67575210481636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1585884826492!5m2!1sen!2sin" title="Map" ></iframe>
         
                </div>
                
                </div>
         
         </Err>
         </React.Fragment>
    )
}

export default ContactUS

const Err=styled.div `
    margin-top :10vh;
    font-size:30px;
    overflow-X:hidden;
  
.map{
    width:400px ;
    height:400px;
    border:none;
    border:3px solid #ff9900; 
 }
`