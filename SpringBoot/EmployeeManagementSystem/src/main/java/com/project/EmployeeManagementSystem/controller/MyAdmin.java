package com.project.EmployeeManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.EmployeeManagementSystem.model.DeletedEmployees;
import com.project.EmployeeManagementSystem.model.Employees;
import com.project.EmployeeManagementSystem.service.EmployeesService;

@RestController
@RequestMapping("admin")
public class MyAdmin {

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

    @PostMapping
    public String addEmployee(@RequestBody Employees employee) {
        return service.addEmployee(employee);
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employees employeeDetails) {
        return service.updateEmployee(id, employeeDetails);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id, @RequestBody String reason) {
        return service.deleteEmployee(id,reason);
    }
    
    @GetMapping("deletedEmployees")
    public List<DeletedEmployees> deletedEmployees(){
    	return service.deletedEmployees();
    }
}
