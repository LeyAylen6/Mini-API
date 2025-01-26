package com.mini_api.api.domain.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record UserDTO(
        Long id,

        @NotNull(message = "The field name is required")
        @Size(min = 2, max = 100, message = "The name must be almost 2 words")
        String name,

        @NotNull(message = "The email name is required")
        @Email(message = "The email must have valid format")
        String email,

        @Positive
        int age
) {}
