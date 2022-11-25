import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import underwriting from "./Images/underwriting.jpg";
import valuation from "./Images/propertyvalue.jpg";
import offer from "./Images/offer.jpg";
import completed from "./Images/completed.jpg";

const DashboardCompletion = () => {
    return (
        <div>
           
        <div >
             {/* code for jumbotron */}
        <div className="jumbotron" style={{backgroundColor: "lightgreen", color:"white", marginBottom:0}}>
        <Link to="/"> <Button variant="contained" style={{float:"right"}} size="large" onClick={()=>alert("You have been logged out")}>Logout</Button></Link>
        <br/>
        <br/>
  <h1 className="display-4" >Welcome to your Mortgage Dashboard</h1>  
  <h2>Your application is <b><u>Completed</u></b> and your mortgage is now live!</h2>
</div>
{/* jumbotron ends here */}
             {/* code for jumbotron */}
        <div className="jumbotron" >
  <h1 className="display-4" >Know about application stages:</h1>  
  <br/>
  <br/>
  <div className='row'>
    <div className='col'>
  <a href='#underwriting'><h3 style={{color:"darkcyan"}}>1. Underwriting</h3></a>
  </div>
  <div className='col'>
  <a href="#valuation"><h4 style={{color:"darkcyan"}}>2. Valuation</h4></a>
  </div>
  <div className='col'>
  <a href="#offer"><h4 style={{color:"darkcyan"}}>3. Offer</h4></a>
  </div>
  <div className='col'>
  <a href="#completion"><h4 style={{color:"darkcyan"}}>4 .Completion</h4></a>
  </div>
  </div>
</div>
{/* jumbotron ends here */}
    <div className='container'>
        {/* code for underwriting */}
        <div className='row'>
        <div className='col' id="underwriting">
        <h1>What is mortgage underwriting?</h1>
        <h5>Our mortgage underwriters' role is to fully assess the risk of your personal and financial information.</h5>
        <h5>It's really important we do this to make sure that all of our customers are treated fairly and we meet Financial Conduct Authority (FCA) requirements.</h5>
        <h5>Your home may be repossessed if you do not keep up repayments on your mortgage</h5>
        </div>
        <div className='col'>
        <img src={underwriting} alt="underwriting"/>
        </div>
        </div>
        <br/>
        <br/>
        {/* code for Valuation */}
        <div className='row' >
            <div className='col'>
            <img src={valuation} alt="valuation"/>
            </div>
            <div className='col' id="valuation">
            <h1>What is mortgage Valuation?</h1>
            <h5>Once you have applied for a mortgage, we will usually arrange for a mortgage valuation for our
                 purposes so that we know that the property you are purchasing or remortgaging will be enough
                  security for the loan you're applying for.</h5>
            <h5>
                Click <Link to="/valuation"><u>here</u></Link> to know more about Valuation
            </h5>
            </div>
        </div>
        {/* code for offer */}
        <br/>
        <br/>
        <div className='row'>
        <div className='col' id="offer">
        <h1>What is mortgage offer?</h1>
        <h5>A mortgage offer, otherwise known as the “offer of advance” is the formal document issued by 
            the lender to the borrower to confirm that they are happy to lend the agreed amount. So, what
             is a mortgage offer? Well, it is a binding contract between the borrower and a mortgage 
             lender. This confirmation that the lender will provide you with a mortgage comes after the 
             lender has fully assessed your circumstances and a full application is made alongside a
              valuation of the property. </h5>

        </div>
        <br/>
        <br/>
        <div className='col'>
        <img src={offer} alt="offer" height="250" width="480"/>
        </div>
        </div>
        <br/>
        <br/>
        <div className='row' >
            <div className='col'>
            <img src={completed} alt="completed"/>
            </div>
            <div className='col' id="completion">
            <h1>What needs to happen from mortgage offer to completion? </h1>
            <h5>If you’re happy with your mortgage offer and have accepted it, what next?</h5>
            <h5>
                <ol>
                    <li>Your solicitor agrees a date to exchange contracts (the point at which a sale becomes legally binding)</li>
                    <li>Exchange signed contracts</li>
                    <li>Agree a completion date</li>
                </ol>
                Most of this will be handled by your solicitor as a key part of the conveyancing process. 
            </h5>
            </div>
        </div>

        
    </div>              
        </div>
        </div>
    )
}

export default DashboardCompletion;