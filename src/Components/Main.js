import React from 'react';
import mort2 from './Images/mort2.png';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function Main() {
    return(
        <div>
            <br/>
            <br/>
             <div margin bottom="200">
      <img border="0" align="left" src={mort2} alt="homeimage" height="280" width="500"/><h1>New home feeling?</h1><h2>Let us help</h2><h4>Take the first step and start the application today.</h4>
          <Link to="/mortgagecalc"><Button id="begin" style={{border: "20", backgroundColor: "green", color: "white"}} >Begin with initial checks</Button></Link>
          <br/>
          <br/>
          <h5>Want to know other options to apply for mortgage?</h5>
          <h6>click <Link to="/waystoapply" ><u>here</u></Link></h6>
      </div>
      <br/>
      <br/>
      <br/>
        </div>
    )
}

export default Main;