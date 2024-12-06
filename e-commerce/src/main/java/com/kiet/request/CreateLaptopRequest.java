package com.kiet.request;

import com.kiet.model.Category;
import com.kiet.model.SpecificationsItem;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
@Data
public class CreateLaptopRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long shopId;
    private boolean isRefurbished; //co phai hang tan trang hay khong
    private boolean isGamingLaptop; //co phai laptop gaming hay khong
    private List<SpecificationsItem> specifications; //thay cho ingredient
}
