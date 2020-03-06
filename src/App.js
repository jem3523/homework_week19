import React, { Component } from 'react';
import Createpersonrow from "./components/createPersonRow";
import Createtableheader from "./components/tableHeader";

class Table extends Component {
  state = {
    employees: [
      { id: 1, name: 'Jason', email: "jason@email.com", title: 'Associate Developer' },
      { id: 2, name: 'Brent', email: "brent@email.com", title: 'Team Lead' },
      { id: 3, name: 'Nick', email: "nick@email.com", title: 'Senior Developer' },
      { id: 4, name: 'Casey', email: "casey@email.com", title: 'Senior Developer' },
      { id: 5, name: 'Brett', email: "brett@email.com", title: 'Developer' },
      { id: 6, name: 'Mark', email: "mark@email.com", title: 'Intern' },
      { id: 7, name: 'Angie', email: "angie@email.com", title: 'Intern' }
    ],
    eRestore: []
  };

  filterInterns = id => {
    const eRestore = this.state.employees.filter(person => person.title === "Intern");
    this.setState({ eRestore });

    const employees = this.state.employees.filter(person => person.title !== "Intern");
    this.setState({ employees });
    
  };

  restoreInterns = id => {
    let employees = this.state.employees.concat(this.state.eRestore); 
    this.setState({ employees });
  };

  sortByName = id => {
    const employees = this.state.employees.name.sort();
    this.setState({ employees });
  };

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
                  email={person.email}
                  title={person.title}
                />
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning ml-5" onClick={this.filterInterns}>Remove Interns</button>
          <button className="btn btn-warning ml-5" onClick={this.restoreInterns}>Restore Interns</button>
          <button className="btn btn-warning ml-5" onClick={this.sortByName}>Sort by Name</button>
      </div>
    )
  }
}

export default Table
