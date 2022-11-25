import React from "react";
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import valuation from "./Images/valuation1.png";
import homemagnifying from "./Images/homemaginfying.png";

const Valuation =() => {
    return(
        <div>
             {/* code for jumbotron */}
        <div className="jumbotron" style={{backgroundColor:"orange", color:"darkblue", 
        marginBottom:0, borderRadius:0}}>
  <h2 className="lead" ><b>Mortgage guide</b></h2>
  <h1 className="display-4" >Mortgage Valuation</h1>  
</div>
{/* jumbotron ends here */}

 {/* code for jumbotron */}
 <div className="jumbotron" style={{ color:"darkcyan"}}>
    <h3 style={{color:"purple", borderRadius:0}}>On this Page</h3> <br/>
    <div>
<div className='row'>
    <div className='col'>
       <a href="#mortgagevaluation" style={{color:"darkcyan"}}><h4><u>What is a mortgage 
        valuation?</u></h4></a>
    </div>
    
    <div className='col'>
       <h4> <a href="#howdotheywork" style={{color:"darkcyan"}}><u>How do they 
        work?</u></a></h4>
    </div>
    <div className='col'>
       <h4> <a href="#valuationprocess" style={{color:"darkcyan"}}><u>Mortgage Valuation 
        Process</u></a></h4>
    </div>
    

</div>
<br/>
<div className='row'>
    <div className='col' id="debt">
        <h4><a href="#mortgageoffer" style={{color:"darkcyan"}} ><u>How long after valuation to 
            mortgage offer?</u></a></h4>
    </div>
    <div className='col'>
        <h4><a href="#lowervaluation" style={{color:"darkcyan"}}><u>What happens if the mortgage valuation is 
            lower?</u></a></h4>
    </div>
    <div className='col' id='independents'>
        <h4><a href="#highervaluation" style={{color:"darkcyan"}}><u>What happens if the mortgage valuation 
            is higher?</u></a></h4>
    </div>
</div>
</div>
<br/>
<br/>
<Link to="/mortgagecalc"><Button variant="outlined" size="large" style={{backgroundColor:"darkcyan", 
color:"white"}}>Start Application</Button></Link>
</div>

{/* jumbotron ends here */}
<div className="container">
<h5>
<InfoIcon style={{color:"orange"}}/> NatWest mortgages are available to over 18s. Your home 
or property may be repossessed if you do not keep up repayments on your mortgage. The content 
on this webpage is guidance only and does not constitute advice.</h5>
</div>
<br/>
<br/>

 {/* code for jumbotron */}
 <div className="jumbotron" style={{backgroundColor:"#42145f", marginBottom:0}}>
    <div className="row">
        <div className="col">
            <img src={valuation} alt="valuation"/>
        </div>
        <div className="col">
            <div className="container">
        <h1 id="mortgagevaluation" style={{color:"white"}}>What is a mortgage <br/> valuation?</h1>
        <h4 style={{color:"white" }} >Once you have applied for a mortgage, we will usually 
        arrange for a mortgage valuation for our purposes so that we know that the property 
        you are purchasing or remortgaging will be enough security for the loan you're 
        applying for.</h4>
        </div>
        </div>
    </div>
</div>
{/* jumbotron ends here */}
        {/* code for jumbotron */}
        <div className="jumbotron" style={{ color:"darkblue", marginBottom:0}}>
 <h5>
    <InfoIcon style={{color:"red"}}/>We will complete a valuation of the property for our 
    lending purposes only.  You should satisfy yourself of the property’s value and condition.</h5>
</div>
{/* jumbotron ends here */}
<br/>
<br/>
{/* code for yellow box */}
<div className="container" style={{backgroundColor:"#fbba20", color:"#42145f", 
width:600, borderRadius:10}}>
    <br/>
    <h1 style={{color:"#42145f"}}>What’s the difference between a mortgage valuation and a home</h1>
    <br/>
    <h5>A mortgage valuation checks that the property has been valued correctly, for our benefit. 
        A home survey is an inspection of the property’s condition to identify any problems and 
        provide suggestions for repairs.</h5>
    <br/>
    <Link style={{color:"#42145f"}}><h5><u>Find out about home surveys</u></h5></Link>
    <br/>
    <br/>
</div>
<br/>
<br/>
<div className="container">
<div className="row">
    <div className="col">
    </div>
    <div className="col">
        <h1 id="howdotheywork" style={{color:"#42145f"}}>How do mortgage <br/> valuations work <br/> and what’s <br/> 
        involved?</h1>
        <h5>The valuation is carried out by a valuer, who would usually visit the property you’re 
            buying or 
            remortgaging and complete a short report.</h5>
        <h5>However, there are some scenarios where the valuer will use online data such as recent sales 
            data, Land Registry details as well as local knowledge to make a valuation without visiting 
            the property. You won't recieve a copy of the final report.</h5>
    </div>
</div>
</div>
{/* jumbotron ends here */}
        {/* code for jumbotron */}
        <div className="jumbotron" style={{  marginBottom:0}}> 
        <div className="row">
            <div className="col">
                <h1>How much does a mortgage valuation cost?</h1>
            </div>
            <div className="col">
                <h6>Where we charge a fee this is £177 (inclusive of a £75 administration fee) for properties 
                    with a value of up to £3m. </h6>
            </div>
            </div>    
</div>
{/* jumbotron ends here */}
<br/>
<br/>
<br/>
<div className="container">
    <div className="row">
        <div className="col">
            <img src={homemagnifying} alt="homemagnifying"/>
        </div>
        <div className="col">
            <h1>Get a free mortgage <br/> valuation</h1>
            <h5>We may be able to offer you a free valuation when you move home and take a mortgage with us. 
                The offer is only available on selected mortgages marked with 'Free mortgage valuation'. 
                Exclusions apply. You will not receive a copy of the valuation report. 
                <Link to="mortgagecalc"> <u>Start an AIP.</u></Link></h5>
        </div>
    </div>
</div>

{/* code for jumbotron */}
<div className="jumbotron" style={{ marginBottom:0}}>
    <div className="conatiner">
        <div className="container">
    <h1 id="valuationprocess">When the valuer visits the property</h1>
    <ol>
        <li>
    <h5> The valuer may take around 15-30mins to look around the property and <br/>
     conduct the valuation, looking for any damage that might affect its value.</h5>
    <br/></li>
    <li><h5> Once the visit is complete, the valuer will make an evaluation of what the <br/>
    market value of the property is. They’ll look at historical sales of similar <br/>
     property transactions in the area and use their own knowledge of the <br/>
      current market.</h5>
      </li>
    <br/>
    <li>
    <h5> They may also provide information on what the ‘minimum reinstatement <br/>
     value’ is. This is the amount it would cost to rebuild the property from <br/>
     scratch, which can be useful to have when looking for buildings insurance <br/>
     cover during the home buying process.</h5>
     </li>
     </ol>
        </div>
    </div>
</div>
{/* jumbotron ends here */}
<br/>
<div className="container">
    <div className="row">
        <div className="col">
            <h1 id="mortgageoffer">Does the valuation mean the mortgage is approved?</h1>
            <h5>A valuation being completed doesn’t mean the mortgage is approved, the valuation report 
                can flag issues. For example:</h5>
            <h5><ul>
                <li>If the condition of the property, e.g. general stability of the property, effects 
                    the security of the loan that you are applying for</li>
                <li>Property value being lower than the offer price</li>
            </ul></h5><br/>
            <h5>There can also be other requirements that may not be met, such as:</h5>
            <h5><ul>
                <li>Applicant eligibility checks not matching the lender’s criteria e.g. 
                    affordability checks, 
                    personal circumstances changing since initial application.</li>
            </ul></h5><br/>
            <h1>
            How long after a valuation can you expect a mortgage offer?
            </h1>
            <h5>When the valuation has been completed this will usually lead to the mortgage 
                offer which can
                 take around one week (but can vary based on individual circumstances).</h5>
        </div>
        <div className="col">
            </div>
    </div>
</div>
<br/>
<br/>
        {/* code for valuation lower and higer */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 id="lowervaluation">What happens if the mortgage valuation is lower than the offer?</h2>
                    <h5>This is also known as a ‘down valuation’ and can happen when the 
                        valuer values the property lower than the agreed price.</h5>
                        <br/>
                    <h5>This may mean that we will only be prepared to lend based on a percentage 
                        of the purchase price or mortgage valuation (Loan to Value), whichever 
                        is lower.</h5>
                    <h5>If this happens, we will contact you with next steps.</h5>
                </div>
                <div className="col">
                    <h2 id="highervaluation">What happens if the mortgage valuation is higher?</h2>
                    <h5>If you do find yourself with a higher mortgage valuation compared to the purchase price (or 
                        estimated value) this tends to be because the purchase price is lower 
                        than the market value.</h5>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Valuation;