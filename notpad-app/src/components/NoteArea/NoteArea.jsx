import "./NoteArea.css"
import { useState } from "react";
function NoteArea({textSubmit}) {
    const [text, setText] = useState(" ");

    const handleChange =(e)=>{
        setText(e.target.value);
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        textSubmit(text);
    }

    return ( <form className="noteContainer">
        
        <div className="area">
        <textarea value={text} onChange={handleChange} className="txtArea" name="" id="" placeholder="Enter your note here..."></textarea>
        </div>
        <div className="submitPlace">
            <div className="colorChoose">
                <div className="color" style={{background:"pink"}}></div>
                <div className="color" style={{background:"purple"}} ></div>
                <div className="color" style={{background:"yellow"}} ></div>
                <div className="color" style={{background:"blue"}} ></div>
                <div className="color" style={{background:"green"}} ></div>
            </div>
            <div style={{background:"white"}}>
                <button  onClick={handleSubmit} className="sumbitBtn">Submit</button>
            </div>
        </div>
    </form> );
}

export default NoteArea;