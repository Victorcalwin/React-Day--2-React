import React,{useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import './Createstudent.css';
import {StudentContext} from '../App';

function Createstudent() {

  let context = useContext(StudentContext);
 
 
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let navigate = useNavigate();

  let handleSubmit = ()=>{
    let data = {
      name,
      email,
      mobile,
      batch
    }
    let students = [...context.students];
    students.push(data)
    context.useStudents(students)
      navigate('/dashboard');
  }
  return <>
    <div>
    <Form id="formBox">
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick ={()=>handleSubmit()}>
        Submit
      </Button>
</Form>
    </div>
  </>
}

export default Createstudent