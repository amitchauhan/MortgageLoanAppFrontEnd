import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminTable = () => {

  const [customer, setCustomer]= useState({
    name:'',  
    // email:'',
    address:'',
    aincome:'',
    deposit:'',
    mexpense:'',
    propValue:'',
    age:'',  
    mobileNo:'',
    // password:'',
    appStage:''

  });

    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async () => {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
        console.log(response.data)
        .catch(()=> console.log("error in getting data"));
        console.log("data received");

    };

   

    const sendingDataAgain = () => {
      axios.put('http://localhost:8080/users',
      {email: document.getElementById("emailr").value,
      // mobileNo: document.getElementById("mobile").value,
      // name: document.getElementById("name").value,
      // address: document.getElementById("address").value,
      // aincome: document.getElementById("annuali").value,
      // mexpense: document.getElementById("monthlye").value,
      // deposit: document.getElementById("deposit").value,
      // propValue: document.getElementById("propv").value,
      // age: document.getElementById("age").value,
      // password: document.getElementById("passwordr").value,  
      appStage: document.getElementById("appStage").value,
      
    })
    .then(response => setCustomer(response.data))
    .catch(() => console.log("error sending data"));
    console.log("data going to mySql database..");
    // navigate("/dashboard");
    }
    


    // const [value,setValue] = useState('Underwriting');
    // const handleChange =(event) => {
    //     setValue(event.target.value);
    // }

    

  
    return (
        <div>
            <div>
            <div className="jumbotron" style={{backgroundColor:"lightcoral", color:"white", marginBottom:0, borderRadius:0}}>
            <Link to="/"> <Button variant="contained" style={{float:"right"}} size="large" onClick={()=>alert("You have been logged out")}>Logout</Button></Link>
              <br/>
              <h1>Welcome Admin</h1>
              <h4>You can change the application stage for customers from here.</h4>
              <br/>
              <h4><b style={{color:"#42145f"}}><u>Please note:</u></b> <br/>App stage can be changed only when you have required approvals from dedicated teams.</h4>
              </div>
                <div>
                <table className="table border shadow" style={{textAlign:"center", fontSize:10, marginTop:0}} >
  <thead style={{backgroundColor:"lightblue"}}>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Annual Income</th>
      <th scope="col">AppStage</th>
      <th scope="col">Deposit</th>
      <th scope="col">Monthly Expense</th>
      <th scope="col">mobile N.o</th>
      <th scope="col">Name</th>
      <th scope="col">PropValue</th>
      {/* <th scope="col">upfk</th> */}
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index)=> (
    <tr>
     <th scope="row" key={index}> {index+1} </th>
    <td> {user.address}</td>
     <td>{user.age}</td>
     <td>{user.aincome}</td>
    <td>{user.appStage}</td>
      <td>{user.deposit}</td>
      <td>{user.mexpense}</td>
      <td>{user.mobileNo}</td>
      <td>{user.name}</td>
      <td>{user.propValue}</td>
      {/* <td>{user.upfk}</td> */}
      


      {/* <td> <input id="address" defaultValue={user.address}></input></td>
     <td><input id="age" defaultValue={user.age}></input></td>
     <td><input id="annuali" defaultValue={user.aincome}></input></td>
    <td><input id="appStage" defaultValue={user.appStage}></input></td>
      <td><input id="deposit" defaultValue={user.deposit}></input></td>
      <td><input id="emailr" defaultValue={user.email}></input></td>
      <td><input id="monthlye" defaultValue={user.mexpense}></input></td>
      <td><input id="mobile" defaultValue={user.mobileNo}></input></td>
      <td><input id="name" defaultValue={user.name}></input></td>
      <td><input id="propv" defaultValue={user.propValue}></input></td>
      <td><input id="passwordr" defaultValue={user.password}></input></td> */}
      
      <td>
      {/* <select id="appStage" onChange={handleChange}>
                    <option value="Underwriting">Underwriting</option>
                    <option value="Valuation">Valuation</option>
                    <option value="Offer">Offer</option>
                    <option value="Complete">Complete</option>
                </select> */}
                <Button type='submit' id="updatingUser"
                    onClick={sendingDataAgain}
                    variant='contained'
                    style={{backgroundColor:"red"}}>Update App Stage</Button>
      </td>
     </tr>
      )) }
  </tbody>
</table>
                </div>
            </div>
        </div>
    );
}

export default AdminTable;