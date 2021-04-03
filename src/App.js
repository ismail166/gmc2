import la6ix3 from "./la6ix3.PNG"
import './App.css';
import React from "react"
import Person from './Person'


function App() {
  const handleName = () =>{
    alert('ismail')
  }
  return (
    <div class="center">
      <Person fullName="ismail" bio="student" pro="student" ismail={handleName}  />
      <Person fullName="ismaill" bio="student" pro="student" />
      
     <h1>fullName : ismail</h1>
     <h2>bio : student </h2>
     <h2>pro : student</h2>
     <img src={la6ix3}></img>
     
    <button onClick={handleName}>toggle</button>
    {false && <fullName></fullName>}
    {true && <fullName></fullName> }
                                                      
</div>
  );
}

export default App;

