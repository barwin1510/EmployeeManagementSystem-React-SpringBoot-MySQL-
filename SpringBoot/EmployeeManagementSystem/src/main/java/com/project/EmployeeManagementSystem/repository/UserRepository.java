package com.project.EmployeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.EmployeeManagementSystem.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}