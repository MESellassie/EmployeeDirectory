import React from "react";

function Employee(props) {
    return (
        <div>
            {props.employeeList.length ? (
                <ul className="list">
                    {props.employeeList.map(result => (
                        <li className="itemList" key={result.id}>
                            <div id="name">{result.name} ({result.type})</div>
                            <div id="email">Contact: {result.email} </div>
                        </li>
                    ))}
                </ul>
            ) : (<p>Sorry, this hero does not exist.</p>)}
       </div>
    )
}

export default Employee;