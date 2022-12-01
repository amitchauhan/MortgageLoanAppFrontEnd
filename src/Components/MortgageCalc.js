
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import "../MortgageCalc.css";


const MortgageCalc = () => {

    const [show, setShow]= useState(false);
    const [show1,setShow1]=useState(false);
    const [soft, setSoft]= useState(false);
    const [before, setBefore]=useState(false);
    const [btl, setBtl] = useState(false);
    const [visible,setVisible]= useState(false);
    const [newcust, setNewcust]= useState(false);
    const [btl1, setBtl1]= useState(false);

    

    return(
    <div>
        {/* code for jumbotron */}
        <div className="jumbotron" style={{backgroundColor:"blueviolet", color:"white"}}>
  
  <p className="lead">Start registration process to see how much you may be able to borrow with a NatWest mortgage, our mortgage rates and what your monthly mortgage payments could be. Once you complete registration, our team will review the application and will provide you the details in 1 working day.</p>
  <hr className="my-4"/>
  <h1 className="display-4" style={{color:"white"}}>How much can I borrow? What might my mortgage payments be?</h1>  
</div>
{/* jumbotron ends here */}

<div className="container">
    <h2>Let's get started..</h2>
    <br/>
    <br/>
    <h3>Do you have a mortgage with us already?</h3>  
    <ButtonGroup variant="outlined" aria-label="large button group " size="large">
      <Button id="mortgagealreadyyes" onClick={()=>setVisible(false)} onClickCapture={()=>setNewcust(true)}>Yes</Button>
      <Button id="mortgagealreadyno" onClick={()=>setVisible(true)} onClickCapture={()=>setNewcust(false)}>No</Button>      
    </ButtonGroup>
    <br/>
    <br/>
    { newcust ?<div>
        <h3>**Thanks for being a valuable customer. We are currently offering mortgage only to new customers who are first time buyers..</h3>
    </div> :null}
    {visible ? <div> <h3> Is the Mortgage for..</h3>
    <ButtonGroup variant="outlined" aria-label="large button group" size="large">
      <Button id="foryourhome" onClick={()=> setShow(true)} onClickCapture={()=>setBtl(false)}>Your home</Button>
      <Button id="rentout" onClick={()=> setBtl(true)} onClickCapture={()=>setShow(false)}>A Property to rent out</Button>      
    </ButtonGroup> </div> :null}
    </div>
    <br/>
    {/* setBtl is used for below content */}
 {visible ?  <div> {btl ?<div className='container'>
        <h5 style={{color:"red"}}>**Apologies, currently we are offering mortgage for Residential purpose only**</h5>
    </div> : null} 
    <br/>
    {show ? 
    <div className='container'>
    <h3>Are you...</h3> 
    </div> :null}
   {show ? <div className='container'>
    <div className="row">
        <div className='col'>
            <hr style={{border:"5px solid gold"}}/>
        </div>
       
        <div className='col'>
        <hr style={{border:"5px solid purple"}}/>
        </div>    
    </div>
   
    <div className="row">
        <div className='col'>
            <h4>A first time buyer</h4>
            You want to buy your first ever home to live in.
            <br/>
            <br/>
            <Button id="ftb" size="large" variant='outlined' onClick={()=> setShow1(true)} onClickCapture={()=>setBtl1(false)}>That's me</Button>
        </div>
       
        <div className='col'>
        <h4>Planning to remortgage</h4>
        You already have a mortgage, but you’d like to find out about a remortgage with us.
        <br/>
            <Button id="remortgage" size="large" variant='outlined' onClick={()=>setBtl1(true)} onClickCapture={()=>setShow1(false)}  >That's me</Button>
        </div>   
        {btl1 ?<div className='container'>
            <br/>
        <h5 style={{color:"red"}}>**Apologies, currently we are offering mortgage to first time buyers only..**</h5>
    </div> : null} 

    </div> 
    </div> :null}
    </div> :null}
    <br/>
    <br/>
    <br/>
   {show ? <div> {show1 ? 
    <div className='container'>
    <div >
      {visible ? <div> 
        <div className="row">
        <div className='col'>
            <hr style={{border:"5px solid darkcyan"}}/>
        </div>
      
    </div>
    <div className="row">
        <div className='col'>
        <h5>Start the mortgage application..</h5>
            
           <Button id="getstartedm" size="large" variant='outlined' onClick={()=>setBefore(true)} >Get started</Button>
        </div>
        <div className='col'>
        </div>
        
    </div> 
    </div> :null}
    </div>

    </div> :null}
    </div> :null}
        {/* setBefot is used for below content */}

   {show1 ? <div> {show ? <div> {visible ? <div className="container">
        <br/>
        <br/>
     {before ?
     <div>  <h2>Before you start..</h2>
        <h5>
            <ul>
                <li>We'll ask about the property, your income and expenditure </li>
                <br/>
                <li>Your Agreement in Principle is an indication of <b>how much we <br/>
                could lend you</b> and is not a commitment to lend</li>
                <br/>
                <li>Getting an AIP won't affect your credit score</li>              
            </ul>
        </h5>
        <Button variant="text" onClick={()=>setSoft(!soft)}><h5 id="aqua"><b><u>Find out more about the types of credit checks we use</u></b></h5></Button>
        
        </div> : null}
        
       {soft ?  <div className='container' id="soft">
       <div className='container'>
            <h5>
            Our Agreement in Principle tool uses a soft credit check which is just an initial look at your financial situation. These soft credit searches aren’t visible to other companies, so they won't affect your credit score now or in the future. Only you and the lender can see the results and you can have multiple soft credit searches without worrying about your credit score.
            <br/>
            <br/>
            A full credit check is performed when a lender makes a full analysis of your credit history. This type of check will be visible on your credit report so any company will be able to see that you've applied for credit.
            <br/>
            <br/>
            </h5>
            </div>
        </div> : null}
        <br/>
        {before ?
        <Link to="/newaip"><Button id="continuetoaip" variant='contained' style={{backgroundColor:"darkcyan"}}>Continue</Button></Link>
        : null}
    </div> : null}
    </div> : null}
    </div> : null}
    </div>
    )
}

export default MortgageCalc;