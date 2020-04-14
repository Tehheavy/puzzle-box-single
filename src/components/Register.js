import React, { useState,useEffect, Component } from "react";
import './Register.css'
function Register(props) {
    const [search, setSearch] = useState("");// Search bar value
    const handleKeyPress=(e)=>{
        if(e.charCode==13){
            e.preventDefault();
            if(search===""){
              alert("Enter a number")
            }
            else{
              if(!isNaN(search))
                props.handleRegisterPress(search)
            }
            
        } 
      }
      const handleInput = event => {//saves Search bar value for later use
        setSearch(event.target.value);
        console.log(search)
      };

  return (
    <div>
      <div>Enter Board size</div>
      <div className="Register-class">

       <button className="selectButton" onClick={e=>{props.handleRegisterPress(3)}}>3</button>
       <button className="selectButton" onClick={e=>{props.handleRegisterPress(4)}}>4</button>
       <button className="selectButton" onClick={e=>{props.handleRegisterPress(5)}}>5</button>
       <input placeholder="size" onChange={e => handleInput(e)} onKeyPress={e=>{handleKeyPress(e)}}/>
      </div>
    </div>
  );
}

export default Register;
