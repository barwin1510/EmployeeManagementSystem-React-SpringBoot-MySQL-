package com.project.EmployeeManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.EmployeeManagementSystem.model.Employees;
import com.project.EmployeeManagementSystem.service.EmployeesService;

@RestController
@RequestMapping("user")
public class MyUser {

	@Autowired
    private EmployeesService service;

    @GetMapping
    public List<Employees> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employees getEmployeeById(@PathVariable Long id) {
        return service.getEmployeeById(id);
    }
    
    @PostMapping()
    public String post() {
    	return "Sorry, this can done only by admin";
    }
    
    @PutMapping()
    public String put() {
    	return "Sorry, this can done only by admin";
    }
    
    @DeleteMapping()
    public String delete() {
    	return "Sorry, this can done only by admin";
    }
	
}
