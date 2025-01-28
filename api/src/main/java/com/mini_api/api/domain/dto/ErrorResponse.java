package com.mini_api.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
public class ErrorResponse {
    private String message;
    private Map<String, String> details;

    public ErrorResponse(String message) {
        this.message = message;
        this.details = new HashMap<>();
    }
}