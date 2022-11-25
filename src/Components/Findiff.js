import { Button } from '@mui/material';
import * as React from 'react';
import "./Findiff.css";
import mobileapp from "./Images/mobile.jpg";
import laptop from "./Images/laptop.png";
import cora from "./Images/cora.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import firstbox from "./Images/firstbox.png";
import pricetab from "./Images/pricetab.jpg";
import draw from "./Images/draw.png";
import payplan from "./Images/payplan.png";

const Findiff =() => {
    return (<div>
         {/* code for jumbotron */}
         <div className="jumbotron" style={{backgroundColor:"orange", color:"darkblue"}}>  
  <p className="lead"><b>Life Moments</b></p>
  <h1 className="display-4"><b>Struggling Financially</b></h1>  
</div>
{/* jumbotron ends here */}
<div className='container' style={{textAlign:"center"}} >
        <h5>Are you worried about your money? We're here to help you manage your debt and have free <br/>
         conversations about your money, whether it’s consolidating debt or making card payments.</h5>
         <br/>
</div>
 {/* code for jumbotron */}
 <div className="jumbotron" style={{backgroundColor:"lightgray", color:"darkcyan"}}>
    <h3 style={{color:"purple"}}>On this Page</h3> <br/>
    <div>
<div className='row'>
    <div className='col'>
       <a href="#struggle" style={{color:"darkcyan"}}><h4><u>I'm worried about my bank payments</u></h4></a>
    </div>
    <div className='col'>
       <h4> <a href="#incomeworries" style={{color:"darkcyan"}}><u>I'm worried about my income might decrease</u></a></h4>
    </div>
    <div className='col'>
       <h4> <a href="#costofliving" style={{color:"darkcyan"}}><u>Cost of Living</u></a></h4>
    </div>
</div>
<div className='row'>
    <div className='col' id="debt">
        <h4><a href="#debtmanagement" style={{color:"darkcyan"}} ><u>Debt Management</u></a></h4>
    </div>
    <div className='col'>
        <h4><a href="#faqs" style={{color:"darkcyan"}}><u>Help on common struggles</u></a></h4>
    </div>
    <div className='col' id='independents'>
        <h4><a href="#paypal" style={{color:"darkcyan"}}><u>Independent Support</u></a></h4>
    </div>
</div>
</div>
<br/>
<br/>
<Button variant="outlined" size="large" style={{backgroundColor:"darkcyan", color:"white"}}>Get in touch</Button>
</div>
{/* jumbotron ends here */}
<div className='container'>
<h1 style={{ textAlign:"left"}} id="struggle">Struggling to make payments</h1>
<br/>
<h5>If you’ve already missed a loan, card or mortgage payment (or you know you’re going to) or you’re struggling to pay off your overdraft, please get in touch with us as soon as possible.</h5>
<h5>Start a chat through one of the three options below, quoting ‘struggling financially’ to get the conversation going.</h5>
<br/>
<br/>
<div>
    <h1>Ways to speak to us</h1>
<div className='row'>
    <div className='col'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          objectFit="cover"
          image={mobileapp}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mobile App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Go to the home screen of your mobile banking app. Tap "Help" at the bottom
            of the screen, then "Message Us" to start a chat, quoting "struggling financially". 
            Criteria apply.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <h4><Link to="/findiff" style={{textAlign:"center"}}><u>Get the App</u></Link></h4>
    </div>   
    <div className='col'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={laptop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Online Banking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Login to Online Banking. From your home screen, click 'Chat Now'
            to start a chat, quoting 'struggling financially'. Criteria apply.
            <br/>
            <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <h4><Link to="/findiff" style={{textAlign:"center"}}><u>Register for Online Banking</u></Link></h4>
    </div>   
    <div className='col'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={cora}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Our Website
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can find Cora on the bottom right of your screen waiting to help on 
            some of our web pages(including this one). Quote "struggling financially" when
            starting the chat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <h4><Link to="/findiff"><u>Our Website</u></Link></h4>
    </div>   
</div>
</div>
<br/>
<br/>
<br/>
<div className='row'>
<div className='col' id="incomeworries">
    <h1>Income Worries</h1>
    <br/>
    <h4>If you're worried that your situation may change, we're here to give you financial support.</h4><br/>
    <h4>Our free Financial Health Check is a review of your personal finances. Discover helpful hints, tips and ideas to help keep you financially fit.</h4><br/>
    <h4>It’ll focus on your needs and goals, and could help you to make better decisions about your finances, now and in the future.</h4><br/>
    <h4>Choose from a quick review online or take the time and go more in-depth with one of our highly trained Senior Personal Bankers. </h4>
    <br/>
    <br/>
    <Button variant="outlined" style={{backgroundColor:"darkcyan", color:"white", size:"large"}}>Get a financial health check</Button>
</div>
<div className='col'>
<img src={firstbox} alt="firstbox"/>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
<div className='row'>
    <div className='col'>
        <img src={pricetab} alt="pricetab" height="400" width="600"/>
    </div>
    <div className='col' id="costofliving">
        <h1>Prices are up. Let's ease the squeeze.</h1>
        <br/>
        <br/>
        <h4>We're experiencing the biggest price hike for fifty years. Inflation, energy prices, tax rises and the Russian invasion of Ukraine, have all played a part. It's squeezing all our pockets. So if you're feeling the pinch, you're not alone.</h4>
        <br/>
        <Link><h5 style={{color:"darkcyan"}}><u>Here's a few things that could help</u></h5></Link>
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<div className='row'>
    <div className='col'>
        <img src={draw} alt="draw" height="400" width="600"/>
    </div>
    <div className='col' id="debtmanagement">
        <h1>Debt Management</h1>
        <br/>
        <br/>
        <h4>If you're looking to pull everything you owe into one place, a debt consolidation loan could help. </h4>
        <br/>
        <h4>By consolidating all your debt into the one personal loan it could be easier to manage and you'll only have one payment to make each month. </h4>
        <br/>
        <br/>
        <Button variant="outlined" style={{backgroundColor:"darkcyan", color:"white"}} size="large">More on Our Debt <br/>
         Consolidation Loan</Button>
    </div>
</div>
<br/>
<br/>
<br/>
<div id="faqs">
    <h1>FAQs and how we can help</h1>
    <h5>
        <br/>
        <ul >
           <Link to="/findiff" style={{color:"darkcyan"}}> <li><u>What is an income and expenditure form?</u></li></Link>
            <br/>
           <Link style={{color:"darkcyan"}}><li><u>What do I do if my account is in collections or recoveries?</u></li></Link>
            <br/>
           <Link style={{color:"darkcyan"}}><li><u>I'm having difficulty meeting my card payments, how can you help?</u></li></Link>
            <br/>
            <Link style={{color:"darkcyan"}}><li><u>I've had a change in circumstance, how can you help?</u></li></Link>
            <br/>
            <Link style={{color:"darkcyan"}}><li><u>I'm worried about my mortgage repayments, how can you help?</u></li></Link>
            <br/>
            <Link style={{color:"darkcyan"}}><li><u>I'm struggling with debt, how can you help?</u></li></Link>
            <br/>
            <Link style={{color:"darkcyan"}}><li><u>How can I reduce my overdraft?</u></li></Link>
            <br/>
            <Link style={{color:"darkcyan"}}><li><u>How can I lower my energy bills?</u></li></Link>
        </ul> 
    </h5>
</div>
<br/>
<br/>
<br/>
<div className='row' id="paypal">
    <div className='col'>
    <h1>Independent</h1>
    <h1>Support Avilable</h1>
    <h6>If you are struggling with your finances, you can get free debt advice. We partner with PayPlan (a third party company), who can offer you free confidential advice for all of your debts. </h6>
    <br/>
    <Link to="/findiff"style={{color:"darkcyan"}}><h5><u>Start your journey with PayPlan</u></h5></Link>
    </div>
    <div className='col'>
        <img src={payplan} alt="payplan"/>
    </div>
</div>
</div>
    </div>)
}

export default Findiff;