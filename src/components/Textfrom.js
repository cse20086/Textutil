import React, { useState } from "react";

export default function Textfrom(props) {
  const handelUpperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    };

   const handelLowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    };

  const handelClearclick = () => {
    let newText = "";
    setText(newText);
    };
    const handelRedclick = () => {
      const newColor = textColor === '#042743' ? 'red' : '#042743';
      setTextColor(newColor);
    };
    
  const handelOnChange = (event) => {
    console.log("on change ");
    setText(event.target.value);
    const newColor = text === "" ? '#042743' : 'red'
   };
  const [text, setText] = useState("");
  
  const [textColor, setTextColor] = useState('#042743');
  return (
    <>
      <div className="container" style={{ color:props.mode==="dark"?"white" : "#042743" }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {" "}
          Enter the text you want to change
          <textarea
            className="form-control"
            value={text}
            style={{ color: textColor , backgroundColor:props.mode==="dark"?"gray" : "white" }}
            onChange={handelOnChange}
            id="myBox"
            rows="10"
          />
          
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpperclick}>
          Convert to UPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLowerclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelClearclick}>
          Clear text area
        </button> 
        <button className="btn btn-primary mx-2" onClick={handelRedclick}>
          Text to red color 
        </button> 
      </div>
      <div className="container my-3" style={{ color:props.mode==="dark"?"white" : "#042743" }} >
        <h6>Your text summary</h6>
        <p>
          {text.split(" ").length} words {text.length} charcter
        </p>
        <p>
          {0.08 * text.split(" ").length} Minutes required to read the words
        </p>
      </div>
    </>
  );
}
