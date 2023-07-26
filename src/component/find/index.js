import React, { useEffect, useState } from "react";
import axios from 'axios';

const EmployeeDetails=()=>{
    const [employee, setEmployee] = useState([]);

    useEffect(() =>{
      axios.get("http://localhost:5000/employee")
        .then((response) =>{
          setEmployee(response.data);
        })
        .catch((error) =>{
          console.error("Error retrieving employees:", error);
        });
    }, []);
    if(employee.length ===0){
      return <div>No employee found.</div>
    }
  return(
      <div>
          <h1>User List</h1>
          {employee.map((employee) =>(
            <div key={employee._id}>
                <p>Id: {employee._id}</p>
                <p>Name: {employee.name}</p>
            </div>
          ))}
      </div>
    );  
};
export default EmployeeDetails;