import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text Here: ");

  const handleUpClick = ()=>{
    console.log("UpperCase was clicked!" + text);
    setText(text.toUpperCase());
  };

  const handleOnChange = (event)=>{
    console.log("onChange was clicked!");
    setText(event.target.value)
  };
  return (
    <div>      
      <div className="mb-3">
        <h1>{props.heading} </h1>
        <textarea className="form-control" 
        value = {text} 
        onChange = {handleOnChange} 
        id="myBox" 
        rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary" onClick ={handleUpClick}>Convert To UpperCase</button>
    </div>
  );
}
