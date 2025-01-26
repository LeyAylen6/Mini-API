package com.mini_api.api.repository;

import com.mini_api.api.domain.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {
    private final List<User> users = new ArrayList<>();
    private Long ID = 1L;

    public List<User> getAll() {
        return users;
    }

    public User save(User user) {
        user.setId(ID++);
        users.add(user);

        return user;
    }
}
