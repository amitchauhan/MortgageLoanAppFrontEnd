import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import { login } from './userSlice.jsx';
// import { useDispatch } from 'react-redux';
// import Dashboard from './Dashboard';
import bcrypt from 'bcryptjs';
import { Box } from '@mui/material';
import Grid from "@mui/material/Grid";
import loginicon from "./Images/login.png";
import Button from "@mui/material/Button";


const LoginPage = () => {
    const [userEmail, setUserEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);
    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)
   
    var loginValidationStatus = false
    // const dispatch = useDispatch();
    var db_id = ""
    var db_encryptedpwd = ""
    var emailId = false
    var db_username = ""

    const api = axios.create({
        baseURL: `http://localhost:8080/users`
    })

    useEffect(() => {
        api.get(`/`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    // const Login = (event) => {
    async function Login(event) {
        event.preventDefault();

        for (let i = 0; i < userDetails.length; i++) {
            if (userEmail.toLowerCase() === (userDetails[i].email).toLowerCase()) {

                db_id = userDetails[i].email;
                db_encryptedpwd = userDetails[i].password;
                db_username = userDetails[i].name;
                emailId = true
            }
        }
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)
        if (loginValidationStatus) {
            // setSuccessMsg("login success. Navigating to dashboard...")

            axios.post(`http://localhost:8080/login`, 
            {
                "email": userEmail,
                "password":password
                
                }
             )
                 .then((response) =>  {
                
                    console.log(response.data.jwtToken);  
                    localStorage.setItem('Token',response.data.jwtToken);  
                    localStorage.setItem('email',userEmail);
                })
                 .catch(error => console.log(error))
            axios.get(`http://localhost:8080/users/${userEmail}`).then((response) =>  {
                
                if(response.data.appStage === "Valuation") {
                    navigate("/dashboardvaluation")
                }
                else if(response.data.appStage === "Offer")
                {
                    navigate("/dashboardoffer")
                }
                else if(response.data.appStage === "Complete") {
                    navigate("/dashboardcompletion")
                }
                else if(userEmail === "admin@natwest.com") {
                    navigate("/admintable")
                }
                else {
                    navigate("/dashboard")
                }
                console.log(response);    
            
            })
             .catch(error => console.log(error))
            // // dispatch(login(
            // //     {
            // //         id: db_id,
            // //         username: db_username,
            // //         loginStatus: true,
            // //         component: <Route path='/dashboard' element={<Dashboard />} />
            // //     }
             // ))
         

        }
        else if (!(emailId)) {
            setEmailError(`Email id doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus) {
            setPasswordError(`Invalid Credentials`)
        }

        else {
            // alert(`Password doesnt match our records`)

        }
    }


    // Routing to diff components
    const navigate = useNavigate()

    return (
        <Box className='row' style={{backgroundColor:"white", color:"white"}}>
            <Box className="col">
        <img src={loginicon} alt="loginIcon" height="400" width="650"/>
      </Box>
      <Box className='col' style={{marginTop:25, marginBottom:25}}>
        
            {/* <Row className="mt-4 pt-4 "> */}
                {/* <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg bg-light"> */}
                <div className='container' style={{backgroundColor:"darkcyan", borderRadius:10}}>
                    <Form>  
                        <br/>              
                        <h4 className='mb-3 text-center ' >Login to Application Tracker</h4>
                        <FloatingLabel controlId="floatingInput" label="Email"  className="mb-3" autoComplete="off" >
                            <Form.Control type="email" placeholder="name@example.com" id="loginemail"
                            onChange={(e) => {setUserEmail(e.target.value); 
                                setEmailError(``) }}
                            isInvalid = {!!emailError}
                            />
                            <Form.Control.Feedback type='invalid' style={{color:"white"}}>
                                {emailError}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3" autoComplete="off" >
                        

                            <Form.Control type="password" placeholder="Password" id="pwd"
                                onChange={(e) => { setPassword(e.target.value) 
                                    setPasswordError(``)
                                }} 
                                isInvalid = {!!passwordError}
                                />
                            <Form.Control.Feedback type='invalid' style={{color:"white"}}>
                                {passwordError}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form>
                     <div className='text-center span2'>
                            <Button type='submit' variant="contained" id="loginsubmit"
                             sx={{ mt: 1, mb: 2, backgroundColor:"red"}} 
                      onClick={Login} >Login</Button>         
                        </div>  
                    <Grid container className='text-center span2' >
              <Grid item xs >
              <Link to="/mortgagecalc" variant="body2" id="registerbutton" style={{color:"white"}} >
                  {"Forgot Password? Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </div>
                {/* </Col> */}
            {/* </Row> */}
            </Box>            
            </Box>
    )
}

export default LoginPage;