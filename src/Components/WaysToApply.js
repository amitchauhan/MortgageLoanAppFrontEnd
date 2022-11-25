import React from 'react';
import {Link} from 'react-router-dom';
import applyOnline from "./Images/applyonline.jpg";
import applyoverphone from "./Images/applyoverphone.jpg";
import branch from "./Images/branch.jpg";

const WaysToApply =() => {
    return (
        <div>
              {/* code for jumbotron */}
        <div className="jumbotron" style={{backgroundColor: "mediumturquoise", color:"white", marginBottom:0, borderRadius:0}}>
  <h1 className="display-4"  >Ways to apply for mortgage</h1>  
  
</div>
{/* jumbotron ends here */}

{/* code for jumbotron */}

<div className="jumbotron" style={{ color:"darkcyan", borderRadius:0}}>
    <div>
<div className='row'>
    <div className='col'>
       <a href="#applyonline" style={{color:"darkcyan"}}><h4><u>Apply Online</u></h4></a>
    </div>
    
    <div className='col'>
       <h4> <a href="#callus" style={{color:"darkcyan"}}><u>Call us</u></a></h4>
    </div>
    <div className='col'>
       <h4> <a href="#visitbranch" style={{color:"darkcyan"}}><u>Visit Nearest Branch</u></a></h4>
    </div>

</div>
</div>
</div>

{/* jumbotron ends here */}

{/* code to apply online */}
        <div className='container'>
<br/>
        <br/>
        <div className='row'>
        <div className='col' id="applyonline">
        <h1>Apply Online?</h1>
        <h5>Go through initial checks <Link to="/mortgagecalc"><u>here</u></Link> to apply for mortgage online.
        <br/>Once applied, you will be able to login to Application Tracker to know the status of application.
        <br/>
        <br/>
        <h5>Want to see our mortgage Rates?</h5>
        <h5>Click <Link to="/mortgagerate"><u>here</u></Link></h5>
        </h5>
        </div>
        <br/>
        <br/>
        <div className='col'>
        <img src={applyOnline} alt="applyonline" height="250" width="480"/>
        </div>
        </div>
        </div>
        {/* code to apply over phone */}
        <div className='container'>
<br/>
        <br/>
        <div className='row'>
        <div className='col'>
        <img src={applyoverphone} alt="applyoverphone" height="250" width="480"/>
        </div>
        <div className='col' id="callus">
        <h1>Call Us?</h1>
        <h5>Call us on +44 7777777777 and one of our representatives would be more than happy to assist you with your mortgage requirements.
        </h5>
        </div>
        <br/>
        <br/>
       
        </div>
        </div>
         {/* code to apply by visiting branch */}
         <div className='container'>
<br/>
        <br/>
        <div className='row'>
        
        <div className='col' id="visitbranch">
        <h1>Visit Us?</h1>
        <h5>You can apply by visiting one of our branches. <br/>
        Need to know the nearest branch? <br/>
        Click <Link><u>here</u></Link> to locate one.
        </h5>
        </div>
        <br/>
        <br/>
        <div className='col'>
        <img src={branch} alt="branch" height="250" width="480"/>
        </div>
        </div>
        </div>
        </div>
    )
} 
export default WaysToApply;