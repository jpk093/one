import React,{useState} from "react";
import axios from "axios";

const InsertEmp =() =>{
    const [name,setName]=useState("");
    const [company,setCompany]=useState("");
    const [salary,setSalary]=useState("");
    const [msg, setmsg] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();

        const newUser={
            name,
            company,
            salary,
        };

        axios.post("http://localhost:5000/users",newUser)
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
            <h1>Add Emps</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)} required></input>
                <input type="text" placeholder="Company" value={company} onChange={(e) =>setCompany(e.target.value)} required></input>
                <input type="text" placeholder="Salary" value={salary} onChange={(e) =>setSalary(e.target.value)} required></input>
                <button type="submit">Save Emps</button>
            </form>
            <h1>{msg}</h1>
        </div>
    );
};
export default InsertEmp;