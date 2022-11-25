import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import mort4 from "./Images/mort4.jpg";

const theme = createTheme();

export default function NewAip() {

    //function to post user data to database
    const [customer, setCustomer]= useState({
      name:'',  
      email:'',
      address:'',
      aincome:'',
      deposit:'',
      mexpense:'',
      propValue:'',
      age:'',  
      mobile:'',
      password:''
    });
          
        //   function to validate registration details 
        let navigate = useNavigate();

    function validationRegister(event) {
        

        let emailid= document.getElementById("emailr").value;
        let regemr = /^([a-zA-Z0-9.-]{1,})@([a-zA-Z0-9-]+).([a-zA-Z]{2,8})(.[a-z]{2,8})?$/;
        let mobr= document.getElementById("mobile").value;
        let regmobr = /^[7-9][0-9]{9}$/;
        let address=document.getElementById("address").value;
        let reguser= /^[a-z0-9]+$/i;
        let name=document.getElementById("name").value;
        let regnamer=/^[a-z]+$/i;
        let passr= document.getElementById("passwordr").value;
        let regpassr= /^[A-Za-z0-9@!~_]{6,}$/;
        let annuali=document.getElementById("annuali").value;
        let regannuali= /^[0-9]{4,}$/;
        let monthlye= document.getElementById("monthlye").value;
        let regmonthlye=/^[0-9]{2,}$/;
        let property= document.getElementById("propv").value;
        let regpropv= /^[0-9]{4,}$/;
        let deposit1= document.getElementById("deposit").value;
        let regdeposit= /^[0-9]{3,}$/;
        let age= document.getElementById("age").value;
        let regage=/^[0-9]{2}$/;
        let flagR=1;
         

        if (regemr.test(emailid)) {
            document.getElementById("emailrerror").innerHTML = " ";
            // flagR=1;
        }
        else {
            document.getElementById("emailrerror").innerHTML = "Invalid Email";
            // flagR=0;
            
        }
        if (regmobr.test(mobr)) {
            document.getElementById("moberror").innerHTML="";
            // flagR=1;
        }
        else {
            document.getElementById("moberror").innerHTML="Mobile number should be of 10 digits only";
            // flagR=0;
            
        }
        if (reguser.test(address)) {
            document.getElementById("addressError").innerHTML="";
            // flagR=1;
        }
        else {
            document.getElementById("addressError").innerHTML="Address can only have letters and numbers";
            // flagR=0;
            
        }
        if (regpassr.test(passr)) {
            document.getElementById("passrerror").innerHTML="";
            // flagR=1;
        }
        else{
            document.getElementById("passrerror").innerHTML="Password must have atleast one capital letter, one small letter, one special symbol (@!~_), one number and the password length must be of atleast 6";
            // flagR=0;
            
        }
        if(regnamer.test(name)) {
            document.getElementById("nameerror").innerHTML="";
        }
        else{
            document.getElementById("nameerror").innerHTML="Name can't be empty";
        }
        if (regannuali.test(annuali)) {
          document.getElementById("annualerror").innerHTML="";}
        else{
          document.getElementById("annualerror").innerHTML="Please enter numeric value of 4 digits at least";
        }
        if(regmonthlye.test(monthlye)) {
          document.getElementById("monthlyerror").innerHTML="";
        }
        else{
          document.getElementById("monthlyerror").innerHTML="Please enter numeric value of 2 digits at least";
        }
        if (regpropv.test(property)) {
          document.getElementById("properror").innerHTML="";
        }
        else{
          document.getElementById("properror").innerHTML="Please enter numeric value of 4 digits at least";
        }
      
        if(regdeposit.test(deposit1)) {
          document.getElementById("deperror").innerHTML="";
        }
        else{
          document.getElementById("deperror").innerHTML="Please enter numeric value of 3 digits atleast";
        }
        if(age >= 18) {
          document.getElementById("ageerror").innerHTML="";
        }
        else{
          document.getElementById("ageerror").innerHTML="Age must be 18 or above";
        }
        
        if ( regemr.test(emailid) && regmobr.test(mobr) && regpassr.test(passr) && reguser.test(address)
         && regnamer.test(name) 
        && regannuali.test(annuali) && regmonthlye.test(monthlye) && regpropv.test(property) 
        && regdeposit.test(deposit1) && regage.test(age) ) {
          flagR=1;          
            
        }
        else {
            event.preventDefault();
            flagR=0;
        }

        if ( regemr.test(emailid) && regmobr.test(mobr) && regpassr.test(passr) && reguser.test(address)
        && regnamer.test(name) 
       && regannuali.test(annuali) && regmonthlye.test(monthlye) && regpropv.test(property) 
       && regdeposit.test(deposit1) && regage.test(age) ) {
        axios
        .post('http://localhost:8080/users',
        {email: document.getElementById("emailr").value,
        mobileNo: document.getElementById("mobile").value,
        name:document.getElementById("name").value,
        address:document.getElementById("address").value,
        aincome:document.getElementById("annuali").value,
        mexpense:document.getElementById("monthlye").value,
        deposit:document.getElementById("deposit").value,
        propValue: document.getElementById("propv").value,
        age: document.getElementById("age").value,
        password:document.getElementById("passwordr").value,    
      })
      .then(response => setCustomer(response.data))
      .catch(() => console.log("error sending data"));
      console.log("data going to mySql database..");
      navigate("/dashboard");
       }
       else {
          console.log("Validations are not passed yet");
       }
        if (flagR) {
            alert("Thank you! Your application has been received. You will now be directed to your application tracker");
            
            return true;
        }
        else {
            return false;         
        }
       
    }
    
    return(
      <Box className='container'>
      <Box className='row'>
      
      <Box className='col' style={{ marginTop:"0", marginRight:"0", 
       borderRadius:10}}>
                    <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
            <CssBaseline />
                  <Box
                sx={{
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Container>
          <Typography component="h1" variant="h5" textAlign="center" >
            Apply Now
            {/* Please provide below details to start the application..One of our representatives will contact you shortly after the details are filled.. */}
          </Typography>
          </Container>
                <Box
                sx={{ mt: 1 }}
                >  
                <div>               
                <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
             <label id="nameerror" style={{color: "red"}}></label><br/> 
             <TextField
              margin="normal"
              required
              fullWidth
              id="emailr"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
                <label id="emailrerror" style={{color: "red"}}></label><br/>
             <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus/>
                <label id="addressError" style={{color: "red"}}></label><br/>
                <TextField
              margin="normal"
              required
              fullWidth
              id="annuali"
              label="Annual Income (£)"
              name="Annual Income"
              autoComplete="Annual Income"
              autoFocus/>
                    <label id="annualerror" style={{color: "red"}}></label><br/>
                    <TextField
              margin="normal"
              required
              fullWidth
              id="monthlye"
              label="Monthly Expense (£)"
              name="Monthly expense"
              autoComplete="Monthly Expense"
              autoFocus/>
                    <label id="monthlyerror" style={{color: "red"}}></label><br/>
                    <TextField
              margin="normal"
              required
              fullWidth
              id="propv"
              label="Property Value (£)"
              name="Property Value"
              autoComplete="Property Value"
              autoFocus/>
                    <label id="properror" style={{color: "red"}}></label><br/>
                    <TextField
              margin="normal"
              required
              fullWidth
              id="deposit"
              label="Deposit (£)"
              name="Deposit"
              autoComplete="Deposit"
              autoFocus/>
                    <label id="deperror" style={{color: "red"}}></label><br/>
                    <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age in years"
              name="Age"
              autoComplete="Age"
              autoFocus/>
                    <label id="ageerror" style={{color: "red"}}></label><br/>
                    
                    <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="mobile"
              autoComplete="mobile"
              autoFocus/>
                <label id="moberror" style={{color: "red"}}></label><br/>
                <TextField
              margin="normal"
              required
              fullWidth
              id="passwordr"
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              autoFocus/>
                    <label id="passrerror" style={{color: "red"}}></label><br/>
                    </div>
                    <Button type='submit' id="completeregistration"
                    onClick={validationRegister}
                    variant='contained'
                    style={{backgroundColor:"red"}}>Submit</Button>
                    
                    <Grid container>
              <Grid item xs>
              <Link to="/login" variant="body2" >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
                    </Box>                  
                    </Box>
                    </Container>
                    </ThemeProvider>
                    </Box>
                    <Box className='col'>
                    <br/>
                    <br/>
                      <h1>Important Links...</h1>
                      <br/>
                      <div>
                      <h4>
                          <Link to="/mortgagerate" style={{color:"darkcyan"}}>
                            <u>View Our Mortgage Rates</u></Link>
                            </h4>
                            <h4>
                          <Link to="/aip" style={{color:"darkcyan"}}>
                            <u>Who's Eligible For Mortgage?</u>
                          </Link>
                            </h4>
                            <h4>
                          <Link to="/waystoapply" style={{color:"darkcyan"}}>
                            <u>Ways to Apply for Mortgage</u>
                          </Link>
                            </h4>
                            <h4>
                          <Link to="/valuation" style={{color:"darkcyan"}}>
                            <u>What is Mortgage Valuation?</u>
                          </Link>
                            </h4>
                            <br/>
                            <br/>
                            <br/>
                            
                      </div>                      
                          <img src={mort4} alt="morthouse" height="200" width="500" style={{borderRadius:10}}/>                
        </Box>
        </Box>
        </Box>
    )
}
