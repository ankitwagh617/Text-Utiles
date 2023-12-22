import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
        
    }
    const handleClText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")
        
    }
    const handleCopyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success")
        
    }
    const handleExtraSpace = () => {
        let ntext = text.split(/[ ]+/);
        setText(ntext.join(" "));
        props.showAlert("Extra Spaces Removed","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h1 style={{color: props.mode === 'light'?'black':'white'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor : props.mode === 'light'?'white':'#212529' ,color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
                <button className='btn btn-primary mx-1' onClick={handleClText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-5" style={{color: props.mode === 'light'?'black':'white'}}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ?"Enter the text in textbox to get preview":text }</p>

            </div>
        </>
    )
}
