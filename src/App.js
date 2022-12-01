import './App.css';
import Main from './Components/Main';
import facebook from './Components/Images/facebook.jpg';
import twitter from './Components/Images/twitter.png';
import instagram from './Components/Images/instagram.jpg';
import linkedin from './Components/Images/linkedin.jpg';
import youtube from './Components/Images/youtube.png';
import {
  Route, Routes} from 'react-router-dom';
  import { Box } from '@mui/material';
  // import Login from './Components/Login';
  // import Register from './Components/Register';
  import {Link} from 'react-router-dom';
  import MortgageCalc from './Components/MortgageCalc';
  import AboveFooter from './Components/AboveFooter';
  import Aip from './Components/AIP';
  import NewAip from './Components/NewAip';
  import Dashboard from './Components/Dashboard';
  import MortgageRate from './Components/MortgageRate';
import Findiff from './Components/Findiff';
import LoginPage from './Components/LoginPage';
import Privateroute from "./Components/PrivateRoute";
import Valuation from "./Components/Valuation";
import DashboardValuation from "./Components/DashboardValuation";
import DashboardOffer from "./Components/DashboardOffer";
import DashboardCompletion from './Components/DashboardCompletion';
import WaysToApply from './Components/WaysToApply';
import AdminTable from './Components/AdminTable';
import { useState } from 'react';
// import FutureScope from './Components/FutureScope';



function App() {

  const [showmain, setShowmain] = useState(true);

  // const [mode, setMode] = useState("light");

  // const darkTheme = createTheme ({
  //   palette:{
  //     mode: mode,
  //   }
  // })

  return (
    <div>
      {/* <ThemeProvider theme={darkTheme}> */}
      
     {/* navbar starts here */}
     <div style={{width:"102%"}} id="top">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid" >
      <Link to="/" className="a.navbar-brand" onClick={()=>setShowmain(true)}> <img src="https://www.natwest.com/content/dam/natwest_com/Logos/og-logo-nw.png" alt='' width="100" height="80" style={{borderRadius:10}}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/mortgagerate" className="nav-link" onClick={()=>setShowmain(false)} >Our Mortgage Rates</Link>
          </li>
          <li className="nav-item">
          <Link to="/aip" className="nav-link" onClick={()=>setShowmain(false)} >Eligibility Criteria</Link>
          </li>
          <li className="nav-item">
          <Link to="/valuation" className="nav-link" onClick={()=>setShowmain(false)} >What is Mortgage Valuation?</Link>
          </li>
          <li className="nav-item">
          <Link to="/waystoapply" className="nav-link" onClick={()=>setShowmain(false)} >Ways to Apply for Mortgage</Link>
          </li>
          
        
        </ul>
       </div>
      <form className="d-flex" style={{float:"right"}}>
          <input className="form-control me-2" type="text" placeholder="Search"/>
          <button className="btn btn-primary" type="button" onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} >Search</button>
        </form>
    </div>
    <div className="col"> 
      <Link to="/login"><button className="btn btn-primary" type="button" id="loginbutton" 
      style={{float:"right"}} onClick={()=>setShowmain(true)}>Login</button></Link>
        </div>
  </nav>    
  
  </div>
    {/* navbar ends */}
  
   <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrfIEY5RvOx7ZyENGMW9Kqp0l4QMxu7pUzUy2oVYaTEbxSbr2HsEEnHVPOjfOcQ6hFaQ&usqp=CAU')", width: "100", height: "300", backgroundSize: "100"}}>
        </div>

    
        {showmain ? 
        <Main/> :null}
      
        <Box>  
            <Routes>
      <Route exact path = '/login' element = {<LoginPage />}></Route>
      {/* <Route exact path = '/register' element = {<Register />}></Route>     */}
      <Route exact path = '/mortgagecalc' element = {<MortgageCalc />}></Route>
      <Route exact path = '/aip' element = {<Aip />}></Route>
      <Route exact path = '/newaip' element = {<NewAip />}></Route>
      <Route exact path = '/mortgagerate' element = {<MortgageRate />}></Route>
      <Route exact path = '/findiff' element = {<Findiff />}></Route>
      <Route element ={<Privateroute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/valuation" element={<Valuation />} />
        <Route path="/dashboardvaluation" element={<DashboardValuation />} />
        <Route path="/dashboardOffer" element={<DashboardOffer />} />
        <Route path="/dashboardcompletion" element={<DashboardCompletion />} />
        <Route path="/waystoapply" element={<WaysToApply />} />
        <Route path="/admintable" element={<AdminTable/>} />
        </Route>
      </Routes>
                </Box>
                <br/>
                <br/>
                <br/>
              <AboveFooter/>         
        {/* footer starts from here */}
        <div style={{width:"102%"}}>
<footer className="text-center text-white" style={{backgroundColor: "darkblue"}}>
  <div className="container p-4">
    <a href="#top" style={{ color:"white"}}>Go to Top</a>
    <br/>
    <br/>
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/NatWest/" role="button" onClick={()=>alert("You will now exit this website")}
        ><img src={facebook} alt='' height="20" width="20"/>
        <i className="fab fa-facebook-f"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/natwestgroup" role="button" onClick={()=>alert("You will now exit this website")}
        ><img src={twitter} alt='' height="20" width=" 20"/><i className="fab fa-twitter"></i></a>    
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/natwest/" role="button" onClick={()=>alert("You will now exit this website")}
        ><img src={instagram} alt='' height="20" width="20"/>
        <i className="fab fa-instagram"></i></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="https://in.linkedin.com/company/natwest-group" role="button" onClick={()=>alert("You will now exit this website")}
        ><img src={linkedin} alt='' height="20" width="20"/>
        <i className="fab fa-linkedin-in"></i></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/user/NatWestVideoChannel" role="button" onClick={()=>alert("You will now exit this website")}
        ><img src={youtube} alt='' height="20" width="20"/>
        <i className="fab fa-youtube"></i></a>
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
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white">Bank Accounts</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Investments</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Overdraft</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Insurance</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Life Moments</h5>

          <ul className="list-unstyled mb-0">
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >View all life moments</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Managin your money</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Travel Guide</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Financial Health Check</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Help and Support</h5>

          <ul className="list-unstyled mb-0">
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Support</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Security</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Service Status</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Natwest app</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Mobile app features</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Secure Messaging</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Apply products</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Manage your Cards</Link>
            </li>
            <li>
            <Link onClick={()=>alert( "Apologies for the inconvenience. This page is currently being created. We will make the information available as soon as possible.")} className="text-white" >Get Cash</Link>
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
        {/* footer ends here */}
        {/* </ThemeProvider> */}
   </div>
  )
}

export default App;
