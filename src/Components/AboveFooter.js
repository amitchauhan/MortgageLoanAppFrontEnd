import React from 'react';
import {Link} from 'react-router-dom';
const AboveFooter =() => {
    return(
             <div classNameName="container">
      <h2>Explore our products and services</h2><br/>
  <div className="row">
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="col"><h3>Our Products</h3>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Current Account</Link></h5><br/>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Credit Cards</Link></h5><br/>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Loans</Link></h5><br/>
  </div>
    <div className="col"><h3>Our Products</h3>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Mortgage</Link></h5><br/>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Savings</Link></h5><br/>
      <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Home Insurance</Link></h5><br/>
  </div>
  <div className="col"><h3>Help and Support</h3>
   <Link to="/findiff" id="strugglingfin"><h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}>Struggling Financially</h5></Link><br/>
    <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Bereavement Support</Link></h5><br/>
    <h5 style={{padding:"0", marginBottom:"0", marginTop:"0"}}><Link  onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}>Ways to bank with us</Link></h5><br/>
</div>
</div>
</div>
      
    )
}
export default AboveFooter;