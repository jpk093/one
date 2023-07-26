import React,{useState} from "react";
import axios from "axios";

const DeleteEmp=()=>{
    const [id,setId]=useState("");
    const [msg, setmsg] = useState("")
    const handleDelete =() =>{
        axios.delete(`http://localhost:5000/users/${id}`)
            .then((response) =>{
                console.log("Emps Deleted successfully:",response.data);
                setmsg("Emps Deleted successfully")
            })
            .catch((error) =>{
                console.error("Error saving emps:",error);
                setmsg("Id is not Available")
            });
    };
    return(
        <div>
            <h1>Delete Employee</h1>
            <input type="text" placeholder="Employee Id" value={id} onChange={(e) => setId(e.target.value)} required></input>
            <button onClick={handleDelete}>Delete</button>

            <h1>{msg}</h1>
        </div>
        
    );
};

export default DeleteEmp;