import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employeeList.json";
import Container from "./components/ContentContainer";
import Form from "./components/Form"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(Employee => Employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeCard component for each Employee object
  render() {
    return (
        <Container>
        <Title>Welcome to the <p>MARVEL Employment Agency!</p></Title>
        <Form></Form>
        {this.state.employees.map(Employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={Employee.id}
            key={Employee.id}
            name={Employee.name}
            alias={Employee.alias}
            image={Employee.image}
            occupation={Employee.occupation}
            email={Employee.email}
          />
        ))}
        </Container>
     );
  }
}

export default App;
