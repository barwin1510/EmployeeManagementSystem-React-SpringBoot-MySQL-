package com.project.EmployeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.EmployeeManagementSystem.model.Employees;

public interface EmployeesRepository extends JpaRepository < Employees , Long > {
	
}
