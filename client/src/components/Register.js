import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import axiosInstance from "../api/axiosInstance";

const Register = () => {

    const [name,setName] = useState("");
    const [file,setFile] = useState("");

    const navigate = useNavigate();

    const addUserData = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo",file);
        formData.append("name",name);
        try{
            const res = await axiosInstance.post("/api/v1/register",formData);
            if(res.status == 200){
                navigate("/")
            }else{
                alert("error")
            }

        }catch(error){
            console.error("Request error:", error);
            alert("An error occurred while sending the request.");
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <h1>Upload your Img Here</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Register