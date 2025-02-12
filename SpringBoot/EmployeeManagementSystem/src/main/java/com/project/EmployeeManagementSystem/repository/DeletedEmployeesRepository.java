package com.project.EmployeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.EmployeeManagementSystem.model.DeletedEmployees;

public interface DeletedEmployeesRepository extends JpaRepository < DeletedEmployees , Long > {

}
