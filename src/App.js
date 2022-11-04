import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Createstudent from './Components/Createstudent';
import Editstudent from './Components/Editstudent';
import React, { useState } from 'react';
import './App.css';
import Ref from './Components/Ref';
import Memo from './Components/Memo';
import Reduce from './Components/Reduce';

export const StudentContext = React.createContext();

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
        <StudentContext.Provider value = {{data, students, useStudents}}>
      <Routes>
      <Route path='dashboard' element={<Dashboard/>}>
                  <Route path='ref' element={<Ref/>}/>
                  <Route path='memo' element={<Memo/>}/>
                  <Route path='reduce' element={<Reduce/>}/>
              </Route>
        <Route path = 'create-student' element = {<Createstudent/>}/>
        <Route path = 'edit-student/:ee/:vic' element = {<Editstudent/>}/>
      </Routes>
      </StudentContext.Provider>
    </BrowserRouter>
    </div>
    </>
}

export default App;
