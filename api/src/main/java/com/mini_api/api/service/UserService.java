package com.mini_api.api.service;

import com.mini_api.api.domain.User;
import com.mini_api.api.domain.dto.UserDTO;
import com.mini_api.api.repository.UserRepository;
import com.mini_api.api.utils.Mapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public List<UserDTO> getAll() {
        List<User> users = userRepository.getAll();

        return Mapper.toUserDTOList(users);
    };

    public UserDTO save(UserDTO user) {
        User newUser = Mapper.toUser(user);
        newUser = userRepository.save(newUser);

        return Mapper.toUserDTO(newUser);
    };
}
