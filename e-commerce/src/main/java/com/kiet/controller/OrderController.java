package com.kiet.controller;

import com.kiet.model.CartItem;
import com.kiet.model.Order;
import com.kiet.model.User;
import com.kiet.request.AddCartItemRequest;
import com.kiet.request.OrderRequest;
import com.kiet.response.PaymentResponse;
import com.kiet.service.OrderService;
import com.kiet.service.PaymentService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<PaymentResponse> createOrder(@RequestBody OrderRequest req,
                                                       @RequestHeader("Authorization") String jwt) throws Exception{
        User user =userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req,user);
        PaymentResponse res = paymentService.createPaymentLink(order);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getOrderHistory(
                                                  @RequestHeader("Authorization") String jwt) throws Exception{
        User user =userService.findUserByJwtToken(jwt);
        //Fetch the user's order history
        List<Order> orders = orderService.getUsersOrder(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
