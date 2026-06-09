package com.ven.backend.services;

import com.ven.backend.entities.User;
import com.ven.backend.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;

    public void addUser(User user) {
        try {
            userRepository.createUser(user);
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong!");
        }
    }

    public List<User> getAllUsers() {
        try {
            return userRepository.getAllUsers();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException("Something went wrong!");
        }
    }
}
