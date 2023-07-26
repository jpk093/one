import React, { useState } from "react";
import axios from "axios";

const DeleteEmployee =() =>{
    const [id,setId]=useState("");
    const [msg, setMsg] = useState("");

    const handleDelete =()=>{
        axios.delete(`http://localhost:5000/employee/${id}`)
            .then(() =>{
                console.log("Employee deleted successfully");
                setMsg("Employee deleted successfully");
            })
            .catch((error) =>{
                console.error("Error deleting employee:", error);
                setMsg("Error deleting employee");
            });
    };

    return(
        <div>
            <h1>Delete Employee</h1>
            <input type="text" placeholder="Employee Id" value={id} onChange={(e) => setId(e.target.value)} required></input>
            <button onClick={handleDelete}>Delete Employee</button>
            <h1>{msg}</h1>
        </div>
    );
};

export default DeleteEmployee;