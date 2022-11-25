import React from 'react';
import facebook from './Images/facebook.jpg';
import twitter from './Images/twitter.png';
import google from './Images/google.png';
import instagram from './Images/instagram.jpg';
import linkedin from './Images/linkedin.jpg';
import youtube from './Images/youtube.png';

function Footer() {
    return(
        <div>
<footer className="text-center text-white" style={{backgroundColor: "darkblue"}}>
  <div className="container p-4">
    <a href="/top">Go to Top</a>
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={facebook} alt='' height="20" width="20"/>
        <i className="fab fa-facebook-f"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={twitter} alt='' height="20" width=" 20"/><i className="fab fa-twitter"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={google} alt='' height="20" width="20"/>
        <i className="fab fa-google"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={instagram} alt='' height="20" width="20"/>
        <i className="fab fa-instagram"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={linkedin} alt='' height="20" width="20"/>
        <i className="fab fa-linkedin-in"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="/india" role="button"
        ><img src={youtube} alt='' height="20" width="20"/>
        <i className="fab fa-youtube"></i></a>
    </section>
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2" style={{color:"white"}}>
              <strong>Sign up for our promotional offers</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section className="mb-4">
      <h3 style={{color:"white"}}>
        Helpful Banking
      </h3>
    </section>
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Products</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")}className="text-white">Bank Accounts</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Investments</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Overdraft</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Insurance</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Life Moments</h5>

          <ul className="list-unstyled mb-0">
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">View all life moments</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Managin your money</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Travel Guide</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Financial Health Check</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Help and Support</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Support</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Security</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Service Status</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Natwest app</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Mobile app features</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Secure Messaging</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Apply products</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Manage your Cards</Link>
            </li>
            <li>
            <Link to="/" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Get Cash</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  

  
  <div className="text-center p-3">
    Copyright © National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.
  </div>
  
</footer>
        </div>
    )
}

export default Footer;