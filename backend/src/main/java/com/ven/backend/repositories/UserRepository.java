package com.ven.backend.repositories;

import com.ven.backend.entities.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    @Autowired private JdbcTemplate jdbcTemplate;

    public void createUser(User user) {
        String sql =
                "INSERT INTO users (email, password, username, first_name, last_name, phone_num)"
                        + " VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(
                sql,
                user.getEmail(),
                user.getPassword(),
                user.getUserName(),
                user.getFirstName(),
                user.getLastName(),
                user.getPhoneNum());
    }

    public List<User> getAllUsers() {
        String sql =
                "SELECT email, password, username, "
                        + "first_name AS firstName, "
                        + "last_name AS lastName, "
                        + "phone_num AS phoneNum, "
                        + "role AS userRole, "
                        + "is_verified AS isVerified, "
                        + "created_at AS createdAt, "
                        + "profile_pic AS profilePic FROM users";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
    }
}
