package com.kiet.request;

import lombok.Data;

@Data
public class SpecificationRequest {
    private String name;
    private Long categoryId;
    private Long shopId;
}
