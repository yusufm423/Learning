import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick = ()=>{
        console.log("Text Cleared")
        let newText = '';
        setText(newText)
        props.showAlert("Cleared","success")
    }
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleCopy=()=>{
        console.log("Copy initiated");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied","success")
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    //hooks
    const [text, setText] = useState('Enter text here');
    //text="Hello"//wrong way
    //setText("Hello")//Right way
    return (
        <>
        <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
            <h1>
                {props.heading} 
            </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey',color : props.mode === 'light'?'black':'white'}} id="mybox" rows="8"></textarea>
                {/* //onchange isliye taaki ham type kr skein */}
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

        </div>
        <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>number of words={text.split(" ").length} and number of characters= {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text above to preview it here"}</p>
        </div>
        </>
    )
}
