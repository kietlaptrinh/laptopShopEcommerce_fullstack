package com.kiet.request;

import com.kiet.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long shopId;
    private Address deliveryAddress;
}
