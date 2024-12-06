package com.kiet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToOne
    private User owner;
    private String name;
    private String description;
    private String usageType;
    @OneToOne
    private Address address;
    @Embedded
    private ContactInformation contactInformation;
    private String supportHours;
    @JsonIgnore
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)

    private List<Order> orders = new ArrayList<>();
    @ElementCollection
    @Column(length = 1000)
    private List<String> images;
    private LocalDateTime registrationDate;
    private boolean active;
    @JsonIgnore
    @OneToMany(mappedBy = "shop",cascade = CascadeType.ALL)
    private List<Laptop> laptops = new ArrayList<>();

}
