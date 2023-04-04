import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { Component } from 'react'
import Button from '@mui/material/Button';


export class Form extends Component {
  render() {
      const fruits = ['Apple','Banana', 'Cherry','Durian','Elderberry'];
    function Submit()
    {
    
        const name= document.getElementById("standard-basic").value
        const fruit= document.getElementById("combo-box-demo").value
        alert('Hello'+name+'! Your favorite fruit is' +fruit+".");
    } 
        
      return (
          <div>
        <h1>Enter your name favourite fruit:</h1>
        <TextField id="standard-basic" label="Name" color="primary"/>
        <br></br>
        <br></br>
        <center>
        <Autocomplete disablePortal id="combo-box-demo" options={fruits} sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Choose a fruit" />}/>
  </center>
  <br></br> <br></br>
  <Button variant="contained" onClick={Submit}>SUBMIT</Button>

        </div>
    ) 
  }
}

export default Form