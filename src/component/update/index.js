import React, { useState } from "react";
import axios from "axios";

const UpdateEmp =()=>{
    const [id,setId]=useState("")
    const [name, setName]= useState("");
    const [company, setCompany]= useState("");
    const [salary, setSalary]= useState("");
    const [msg, setMsg]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        const newUser ={
            name,
            company,
            salary,
        };

        axios.put(`http://localhost:5000/users/${id}`,newUser)
            .then((response) =>{
                console.log("Emp updated successfully:",response.data);
                setMsg("Emp updated successfully");
            })
            .catch((error) =>{
                console.error("Error updating emp:", error);
                setMsg(" Not updated");
            });
    };
    return(
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Employee Id" value={id} onChange={(e) => setId(e.target.value)} required></input>
                <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}  required></input>
                <input type="text" placeholder="Company" value={company} onChange={(e) =>setCompany(e.target.value)}  required></input>
                <input type="text" placeholder="Salary" value={salary} onChange={(e) =>setSalary(e.target.value)}  required></input>
                <button type="submit">Update Emp</button>
            </form>
            <h1>{msg}</h1>
        </div>
    );
};

export default UpdateEmp;