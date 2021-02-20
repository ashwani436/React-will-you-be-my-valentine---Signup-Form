import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
 const onChangeAlphaNumericInput=(e)=>{
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z(\-)]+$/;//this will admit letters, numbers and dashes
    if (value.match(regex)||value ===""){
      this.setState({inputValue:value});
    }
  }
  const submit=()=>{
        
  }
  return (
    <div id="main">
        <label>Name:</label>
        <input type="text" data-testid ='name' onClick={()=>onChangeAlphaNumericInput(e)}/><br/>
        <label> Email address:</label>
        <input type="email" data-testid = 'email'/><br/>
        <label>Gender: </label>
        <select>
                  <option name="male">male</option>
                  <option name="female">female</option>
                  <option name="other">other</option>
              </select><br/>
        <label>Phone Number:</label>
        <input type="number" data-testid = 'phoneNumber'/><br/>
        <label>Password:</label>
        <input data-testid = 'password' type='password'/><br/>
        <button type="submit">Submit</button>
    </div>
  )
}


export default App;
