import React from "react";
import "./style.css";

function Form (props) {

    return (
    <div>
        <h1>Welcome to the Marvel Character Directory</h1>

            <form className="form">
                <input
                    value={props.name}
                    name="characterName"
                    onChange={props.handleInputChange}
                    type="text"
                    />
                    <br></br>
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Click</button>
            </form>
    </div>
    );
} 

export default Form;