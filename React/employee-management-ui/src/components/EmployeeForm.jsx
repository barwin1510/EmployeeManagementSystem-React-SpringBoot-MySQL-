import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EmployeeForm.css";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    experience: "",
    salary: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/admin/${id}`)
        .then((response) => setEmployee(response.data))
        .catch((error) => console.error("Error fetching employee:", error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:8080/admin/${id}`, employee)
        .then(() => navigate("/"))
        .catch((error) => console.error("Error updating employee:", error));
    } else {
      axios
        .post("http://localhost:8080/admin", employee)
        .then(() => navigate("/"))
        .catch((error) => console.error("Error adding employee:", error));
    }
  };

  return (
    <div className="employee-form">
      <h1>{id ? "Edit Employee" : "Add Employee"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            value={employee.department}
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
            required
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            value={employee.experience}
            onChange={(e) =>
              setEmployee({ ...employee, experience: e.target.value })
            }
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
            required
          />
        </label>
        <button type="submit" className="submit-button">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
