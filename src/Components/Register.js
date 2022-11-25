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

export default function Register() {

    //function to post user data to database
    const [customer, setCustomer]= useState({
      
      email:'',
      password:''
    });
          
        //   function to validate registration details 
        let navigate = useNavigate();

    function validationRegister(event) {
        

        let emailid= document.getElementById("emailr").value;
        let regemr = /^([a-zA-Z0-9.-]{1,})@([a-zA-Z0-9-]+).([a-zA-Z]{2,8})(.[a-z]{2,8})?$/;
        let passr= document.getElementById("passwordr").value;
        let regpassr= /^[A-Za-z0-9@!~_]{6,}$/;
        let flagR=1;
         
        if (regemr.test(emailid)) {
            document.getElementById("emailrerror").innerHTML = " ";
            // flagR=1;
        }
        else {
            document.getElementById("emailrerror").innerHTML = "Invalid Email";
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
        
        if ( regemr.test(emailid) && regpassr.test(passr) ) {
          flagR=1;          
            
        }
        else {
            event.preventDefault();
            flagR=0;
        }

        if ( regemr.test(emailid) && regpassr.test(passr) ) {

        axios
        .post('http://localhost:8080/users',
        {email: document.getElementById("emailr").value,
        password:document.getElementById("passwordr").value,    
      })
      .then(response => setCustomer(response.data))
      .catch(() => console.log("error sending data"));
      console.log("data going to mySql database..");
      navigate("/newaip");
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
