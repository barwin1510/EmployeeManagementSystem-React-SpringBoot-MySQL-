import React, { useState } from "react";
import EmployeeService from "./EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    jobRole: "",
    experience: "",
    salary: "",
  });
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee).then(() => {
      navigate("/");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Role"
          name="jobRole"
          value={employee.jobRole}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Experience"
          name="experience"
          value={employee.experience}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Salary"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />
        <button onClick={saveEmployee}>Save</button>
      </form>
    </div>
  );
};

export default AddEmployee;
