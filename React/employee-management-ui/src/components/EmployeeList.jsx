import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/admin/${id}`)
      .then(() =>
        setEmployees(employees.filter((employee) => employee.id !== id))
      )
      .catch((error) => console.error("Error deleting employee:", error));
  };

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <Link to="/add" className="add-button">
        Add Employee
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.experience}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={`/edit/${employee.id}`} className="edit-button">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="delete-button"
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
