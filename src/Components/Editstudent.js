import React,{useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom';
import {StudentContext} from '../App';

function Editstudent() {
  let context = useContext(StudentContext);
  let params = useParams();

  console.log(params);
  console.log(params.vic)
  let [name, setName] = useState(context.students[params.ee].name);
  let [email, setEmail] = useState(context.students[params.ee].email);
  let [mobile, setMobile] = useState(context.students[params.ee].mobile);
  let [batch, setBatch] = useState(context.students[params.ee].batch);
  let navigate = useNavigate();

  let handleSubmit = ()=>{
    let data = {
      name,
      email,
      mobile,
      batch
    }
    let students = [...context.students];
    students.splice(params.ee,1,data);
    context.useStudents(students);
 
      navigate('/dashboard');
  }
  return <>
    <div>
    <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name}placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email}placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile}placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch}placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick ={()=>handleSubmit()}>
        Submit
      </Button>
</Form>
    </div>
  </>
}

export default Editstudent

