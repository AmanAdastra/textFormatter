import React,{useState} from "react";

const TextForm = () => {

    const [text,setText] = useState('')

    const onTextChange = event =>{
        setText(event.target.value)
    }
    const onUpperClick = event =>{
        setText(text.toUpperCase())
    }
    const onClearClick =event =>{
        setText("")
    }
  return (
    <div className="mb-3">
        <h2>Enter text to format</h2>
      <textarea
        className="form-control"
        id="myTextArea"
        rows="6"
        onChange={onTextChange}
        value={text}
      ></textarea>
      <button className="btn btn-primary m-2" onClick={onUpperClick}>
          UpperCase
      </button>
      <button className="btn btn-info m-2" onClick={onClearClick}>
          Clear
      </button>
    </div>
  );
};

export default TextForm;
