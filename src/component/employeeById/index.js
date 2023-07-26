import React, { useEffect, useState } from "react";
import axios from 'axios';

const EmployeeById =({ id }) =>{
    const [employee, setEmployee] = useState(null);

    useEffect(() =>{
        axios.get(`http://localhost:5000/employee/${id}`)
            .then((response) =>{
                setEmployee(response.data);
            })
            .catch((error) =>{
                console.error("Error retrieving employee:", error);
            });
    },[id]);
    if(!employee){
        return <div>Loading employee details.....</div>;
    }
    return(
        <div>
           {employee.map((employees) =>(
            <div key={employees._id}>
                <p>Id: {employees._id}</p>
                <p>Name: {employees.name}</p>
            </div>
          ))}
        </div>
    );
};

export default EmployeeById;