package com.ven.backend.service;

import com.ven.backend.entity.User;
import com.ven.backend.repository.UserRepository;
import com.ven.backend.utils.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;
    @Autowired private BCryptPasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;

    // authentication part
    public String userLogin(User user) {
        User foundUser = userRepository.verifyUser(user);

        if (!passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            throw new RuntimeException("Invalid Password!");
        }

        return jwtUtil.generateToken(foundUser.getEmail());
    }

    public void addUser(User user) {
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.createUser(user);
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong in creating the user!.");
        }
    }

    // JIC
    public List<User> getAllUsers() {
        try {
            return userRepository.getAllUsers();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException("Something went wrong in getting all the users!");
        }
    }
}
