package com.project.EmployeeManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.EmployeeManagementSystem.model.Employees;
import com.project.EmployeeManagementSystem.repository.EmployeesRepository;

@Service
public class EmployeesService {
	
    @Autowired
    private EmployeesRepository repository;

    public List<Employees> getAllEmployees() {
        return repository.findAll();
    }

    public Employees getEmployeeById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public String addEmployee(Employees employee) {
    	repository.save(employee);
        return "Posted Successfully";
    }

    public String updateEmployee(Long id, Employees employeeDetails) {
    	
        Optional<Employees> employee = repository.findById(id);
        if (employee.isPresent()) {
        	Employees e=employee.get();
            e.setName(employeeDetails.getName());
            e.setDepartment(employeeDetails.getDepartment());
            e.setSalary(employeeDetails.getSalary());
            repository.save(e);
            return "Updated Successfully";
        }
        return "Not Found";
    }
    
    public String deleteEmployee(Long id) {
    	if(repository.existsById(id)) {
    		repository.deleteById(id);
    		return "Deleted Successfully";
    	}
    	return "Not Found";
    }
    
}
