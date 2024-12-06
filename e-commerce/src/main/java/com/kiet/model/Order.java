package com.kiet.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User customer;
    @JsonIgnore
    @ManyToOne
    private Shop shop;
    private Date createdAt;
    private Long totalAmount;
    @ManyToOne

    private Address deliveryAddress;
    private String orderStatus;
    @OneToMany
    private List<OrderItem> items;
    //private Payment payment
    private Long totalPrice;
    private int totalItem;
}

