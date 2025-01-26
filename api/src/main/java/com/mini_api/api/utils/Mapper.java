package com.mini_api.api.utils;

import com.mini_api.api.domain.User;
import com.mini_api.api.domain.dto.UserDTO;

import java.util.List;

public class Mapper {
    public static List<UserDTO> toUserDTOList(List<User> users) {
        return users.stream().map((user) -> toUserDTO(user)).toList();
    }

    public static User toUser(UserDTO user) {
        return User.builder()
                .name(user.name())
                .email(user.email())
                .age(user.age())
                .build();
    }

    public static UserDTO toUserDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .age(user.getAge())
                .build();
    }
}
