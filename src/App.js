import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Createstudent from './Components/Createstudent';
import Editstudent from './Components/Editstudent';
import { useState } from 'react';
import './App.css';

function App() {
  let data ={
    monthly: "Rs. 40,000",
    annual: "Rs. 4,80,000",
    task: 80,
    pending: 18
  }

  let [students, useStudents] = useState([
    {
    name: "Raj",
    email: "raj@gmail.com",
    mobile: "3265478",
    batch: "B36WDT"
  },
  {
    name: "Joshva",
    email: "josh@gmail.com",
    mobile: "3265478",
    batch: "B36WDT"
  },
  {
    name: "Victor",
    email: "honey@gmail.com",
    mobile: "3265478",
    batch: "B36WDT"
  },
])
  return <>
  <div id='wrapper'>
  
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path = 'dashboard' element = {<Dashboard data={{data, students, useStudents}}/>}/>
        <Route path = 'create-student' element = {<Createstudent data = {{students, useStudents}}/>}/>
        <Route path = 'edit-student/:id' element = {<Editstudent data = {{students, useStudents}}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
}

export default App;
