import React from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    } 
    const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
  } 
  const removeExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handleBoldClick = () => {
    setIsBold(!isBold);
    props.showAlert("Text is bold now!", "success");
  }
  
  const handleSpeakText = () => {
    const utterance = new SpeechSynthesisUtterance(text); 
    window.speechSynthesis.speak(utterance);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);  // Toggle italic state
    props.showAlert("Text is italic now!", "success");
  };

    
    const onChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [isBold, setIsBold] = React.useState(false);
    const [text, setText] = React.useState('');
    const [isItalic, setIsItalic] = React.useState(false); 
  return (
    <>
    <div style={{color:props.mode ==='dark'?'white':'#042743'}} className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{ color:props.mode ==='dark'?'white':'#042743',fontWeight: isBold ? 'bold' : 'normal',fontStyle: isItalic ? 'italic' : 'normal',backgroundColor:props.mode ==='dark'?'grey':'white'}} value={text} onChange={onChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleBoldClick}>Bold Text</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakText}>Speak Text</button>
        <button className="btn btn-primary mx-1" onClick={handleItalicClick}>Italic Text</button>




    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.trim().length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview here"}</p>
    </div>
    </>
  )
}
