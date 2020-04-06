import React from 'react'
import styled from 'styled-components'


function About() {
    return (
        <Err className="text-center container bg-dark">
                   <h1 style={{color:'#ff9900'}} className="pb-1 pt-2" ><b>ABOUT</b></h1>
                   <div className="line text-center mx-auto mb-5"></div>
                   <p className="text-center text-light">Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                   <p className="text-center text-light">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.</p>
         </Err>
    )
}

export default About

const Err=styled.div `
    margin-top :15vh;
    overflow-X:hidden;
 .line{
     height:1px;
     background:white;
     width:30%;
 }
 }

`