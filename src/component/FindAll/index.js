import React, { useEffect, useState } from "react";
import axios from 'axios';

const FindEmp=()=>{
    const [users, setEmps] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:5000/users")
          .then((response) =>{
            setEmps(response.data);
          })
          .catch((error) =>{
            console.error("Error fetching data:",error);
          });
      }, []);
    return(
        <div>
            <h1>User List</h1>
            {users.map((emps) =>(
              <div key={emps._id}>
                  <p>Id: {emps._id}</p>
                  <p>Name: {emps.name}</p>
                  <p>Company: {emps.company}</p>
                  <p>Salary: {emps.salary}</p>
                  <hr/>
              </div>
            ))}
        </div>
      );  
};
export default FindEmp;