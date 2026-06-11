package com.ven.backend.controllers;

import com.ven.backend.entity.User;
import com.ven.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired UserService userService;

    @PostMapping("/login")
    public String userLogin(@RequestBody User user) {
        return userService.userLogin(user);
    }

    @PostMapping("/register")
    public void createUser(@RequestBody User user) {
        userService.addUser(user);
    }
}
