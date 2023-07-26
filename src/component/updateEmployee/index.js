import React, { useState } from "react";
import axios from "axios";


const UpdateEmployee =() =>{
    const [id,setId]=useState("")
    const [name, setName]= useState("");
    const [msg, setMsg]= useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();

        const updatedData = {
            name,
          };
        axios.put(`http://localhost:5000/employee/${id}`, updatedData)
            .then((response) =>{
                console.log("Employee updated successfully:", response.data);
                setMsg("Employee updated successfully");
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
                setMsg("Error updating employee");
            });
    };
    return(
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Employee Id" value={id} onChange={(e) => setId(e.target.value)} required></input>
                <input type="text" value={name} onChange={(e) =>setName(e.target.value)} required></input>
                <button type="submit">Update Employee</button>
            </form>
            <h1>{msg}</h1>
        </div>
    );
};

export default UpdateEmployee;