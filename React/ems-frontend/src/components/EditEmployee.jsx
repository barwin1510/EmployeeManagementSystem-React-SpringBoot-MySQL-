import React, { useEffect, useState } from "react";
import EmployeeService from "./EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    jobRole: "",
    experience: "",
    salary: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) => {
      setEmployee(response.data);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id).then(() => {
      navigate("/");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div>
      <h2>Edit Employee</h2>
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
        <button onClick={updateEmployee}>Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
