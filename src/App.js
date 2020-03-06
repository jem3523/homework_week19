import React, { Component } from 'react';
import Createpersonrow from "./components/createPersonRow";
import Createtableheader from "./components/tableHeader";

class Table extends Component {
  state = {
    employees: [
      { id: 1, name: 'Jason', age: 50, title: '101 Associate Developer' },
      { id: 2, name: 'Brent', age: 40, title: '401 Team Lead' },
      { id: 3, name: 'Nick', age: 30, title: '301 Senior Developer' },
      { id: 4, name: 'Casey', age: 26, title: '301 Senior Developer' },
      { id: 5, name: 'Brett', age: 32, title: '201 Developer' },
      { id: 6, name: 'Mark', age: 15, title: '001 Intern' },
      { id: 7, name: 'Angie', age: 16, title: '001 Intern' }
    ],
    eRestore: []
  };

  filterInterns = id => {
    const eRestore = this.state.employees.filter(person => person.title === "001 Intern");
    this.setState({ eRestore });

    const employees = this.state.employees.filter(person => person.title !== "001 Intern");
    this.setState({ employees });
    
  };

  restoreInterns = id => {
    let employees = this.state.employees.concat(this.state.eRestore); 
    this.setState({ employees });
  };

  // sortByAge = id => {
  //   const employees = this.state.employees.filter(person => person.age > 16);
  //   this.setState({ employees });
  // };

  render() {
    return (
      <div>
          <h1 id='title' className= 'ml-5 mt-5'>Employee Table</h1>
          <table id="employees" className='table ml-5'>
            <tbody>
              <Createtableheader/>
              {this.state.employees.map(person => (
                <Createpersonrow
                  id={person.id}
                  name={person.name}
                  age={person.age}
                  title={person.title}
                />
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning ml-5" onClick={this.filterInterns}>Remove Interns</button>
          <button className="btn btn-warning ml-5" onClick={this.restoreInterns}>Restore Interns</button>
          <button className="btn btn-warning ml-5" onClick={this.sortByAge}>Sort by Age</button>
      </div>
    )
  }
}

export default Table
