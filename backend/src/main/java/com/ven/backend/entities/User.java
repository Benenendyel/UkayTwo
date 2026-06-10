package com.ven.backend.entities;

import java.time.LocalDateTime;

public class User {

    private String email; // this will the unique or primary key
    private String password;
    private String userName;
    private String firstName;
    private String lastName;
    private String profilePic; // optional
    private String phoneNum;
    private String userRole; // has "regular" as it default value in database
    private boolean isVerified; // also has false as its default false value
    private LocalDateTime createdAt;

    public User() {}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(
            String email,
            String password,
            String userName,
            String firstName,
            String lastName,
            String phoneNum) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNum = phoneNum;
    }

    // return
    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public String getUserName() {
        return this.userName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public String getProfilePic() {
        return this.profilePic;
    }

    public String getPhoneNum() {
        return this.phoneNum;
    }

    public String getUserRole() {
        return this.userRole;
    }

    public boolean getIsVerified() {
        return this.isVerified;
    }

    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    // setters
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public void setIsVerified(boolean isVerified) {
        this.isVerified = isVerified;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
