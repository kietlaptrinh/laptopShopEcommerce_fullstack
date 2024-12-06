package com.kiet.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private Long price;
    @ManyToOne
    private Category laptopCategory;
    //List of image URLs for the laptop
    @Column(length = 1000)
    @ElementCollection
    private List<String> images;
    private boolean available;
    @ManyToOne
    private Shop shop;
    private boolean isRefurbished;
    private boolean isGamingLaptop;
    @ManyToMany
    private List<SpecificationsItem> specifications = new ArrayList<>();
    private Date creationDate;
}
