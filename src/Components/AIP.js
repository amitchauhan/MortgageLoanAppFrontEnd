import * as React from 'react';
import Box from '@mui/material/Box';
import "./Aip.css";
import { Link } from 'react-router-dom';
import newhouse from "./Images/mort1.jpg";
import eligible from "./Images/eligible.png";
import percentage from "./Images/percentage.jpg";


export default function Aip() {
  return (
    <Box >
       {/* code for jumbotron */}
       <div className="jumbotron" style={{backgroundColor: "cadetblue", color:"white", borderRadius:0}}>
  <h1 className="display-4" style={{color:"white"}}>Check Basic Eligibility Criteria..</h1>  
</div>
{/* jumbotron ends here */}
<br/>
<br/>
    <Box className='container' >
     <div className='row'>
      <div className='col'>
      <img src={eligible} alt="eligible" height="300" width="400" style={{borderRadius:10}}/>
      </div>
      <div className='col'>
      <h2>In order to apply for a mortgage, you should be: </h2>
      <h5>
      <ul>
      <li>Aged 18 or over</li>
      <li>A UK national residing in the UK</li>
      <li>Paid your income in Pound Sterling</li>
      <li>Planning to buy a property in the UK</li>
      </ul></h5>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
      <div className='row'>
        <div className='col'>
      <h2>Property Requirements:</h2>
      <h5><ul>
        <li>Value of property must be between 50000 to 500000 pounds </li>
        <li>Property should not be more than 20 years old</li>
        <li>We will assign a valuer who will visit the property when your application is at "Valuation" stage. Valuer will decide if we can provide mortgage on that property or not</li>
      </ul></h5>
      </div>
      <div className='col'>
        <img src={newhouse} alt="newhouse" height="300" width="400" style={{borderRadius:10}}/>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='row'>
        <div className='col'>
        <img src={percentage} alt="percentage" height="300" width="400" style={{borderRadius:10}} />
        </div>
        <div className='col'>
      <h2>Loan Requirements:</h2>
      <h5><ul>
        <li>We offer mortgage with a maximum Loan to Value of 95% </li>
      </ul></h5>
      </div>
      </div>
      <br/>
      <h4>Please click <Link to="/mortgagecalc">here</Link> to start the application</h4>
       </Box>
    </Box>
  );
}