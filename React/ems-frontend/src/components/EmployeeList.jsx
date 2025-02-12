import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add-employee" className="btn btn-primary">
        Add Employee
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Role</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.jobRole}</td>
              <td>{employee.experience}</td>
              <td>{employee.salary}</td>
              <td>
                <Link
                  to={`/edit-employee/${employee.id}`}
                  className="btn btn-info"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
