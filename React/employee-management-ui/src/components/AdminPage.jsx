import React from "react";
import EmployeeList from "./EmployeeList";

const AdminPage = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Admin Dashboard</h1>
      <EmployeeList />
    </div>
  );
};

export default AdminPage;
