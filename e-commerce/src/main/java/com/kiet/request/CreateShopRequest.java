package com.kiet.request;

import com.kiet.model.Address;
import com.kiet.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateShopRequest {
    private Long id;
    private String name;
    private String description;
    private String usageType;
    private Address address;
    private ContactInformation contactInformation;
    private String supportHours;
    private List<String> images;
}
