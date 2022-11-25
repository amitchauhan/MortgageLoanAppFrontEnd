import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminTable = () => {

    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async () => {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
    };


    const [value,setValue] = useState('Underwriting');
    const handleChange =(event) => {
        setValue(event.target.value);

        
    }


  
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
                <table className="table border shadow" style={{textAlign:"center"}} >
  <thead style={{backgroundColor:"lightblue"}}>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Annual Income</th>
      <th scope="col">AppStage</th>
      <th scope="col">Deposit</th>
      <th scope="col">Email</th>
      <th scope="col">Monthly Expense</th>
      <th scope="col">mobile N.o</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index)=> (
    <tr>
     <th scope="row" key={index}> {index+1} </th>
      <td>{user.address}</td>
      <td>{user.age}</td>
      <td>{user.aincome}</td>
      <td>{user.appStage}</td>
      <td>{user.deposit}</td>
      <td>{user.email}</td>
      <td>{user.mexpense}</td>
      <td>{user.mobileNo}</td>
      <td>{user.name}</td>
      <td>
      <select  onChange={handleChange}>
                    <option value="Underwriting">Underwriting</option>
                    <option value="Valuation">Valuation</option>
                    <option value="Offer">Offer</option>
                    <option value="Complete">Complete</option>
                </select>
                <button>Submit</button>
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