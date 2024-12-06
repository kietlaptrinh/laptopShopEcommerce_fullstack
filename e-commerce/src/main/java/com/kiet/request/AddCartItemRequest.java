package com.kiet.request;

import lombok.Data;

import java.util.List;
@Data
public class AddCartItemRequest {
    private Long laptopId;
    private int quantity;
    private List<String> specifications;
}
