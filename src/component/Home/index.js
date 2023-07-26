import React,{useState} from "react";
import axios from "axios";

const InsertEmp =() =>{
    const [name,setName]=useState("");
    // const [company,setCompany]=useState("");
    // const [salary,setSalary]=useState("");
    const [msg, setmsg] = useState("")

    const handleSubmit = (e) =>{
        // console.log(name)
        e.preventDefault();

        const newUser  = {
            name,
        };
     axios.post("http://localhost:5000/sendData",newUser)
            .then((response) =>{
                console.log("Emps saved successfully:",response.data);
                setmsg("Emps saved successfully")
            })
            .catch((error) =>{
                console.error("Error saving emps:",error);
            });
    };
    
    return(
        <div>
            <h1>Write your name</h1>
            <form onSubmit={handleSubmit}>
                <input  type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                <button type="submit">Save Employees</button>
            </form>
            <h1>{msg}</h1>
        </div>
    )
};
export default InsertEmp;