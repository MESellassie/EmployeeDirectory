import React from "react";
import "./style.css";

function Employee (props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
             <strong>Alias:</strong> {props.alias}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Employee;
