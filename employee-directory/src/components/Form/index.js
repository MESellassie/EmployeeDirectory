import React from "react";
import "./style.css";

function Form (props) {

    return (
      <div>
       <h3>Enter your heroe's name below and click alphaphetize to view the full list again!</h3>
        
       <div class="entertext">
        <form className="form">
          
          <input
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
            type="text"
            placeholder="lowercase only!"
          />
         <br></br>
         <br></br>
          <button className="btn btn-danger btn-lg shadow" onClick={props.handleFormSubmit}>Submit</button>
        </form>
        </div>
      </div>
    );
  
}

export default Form;