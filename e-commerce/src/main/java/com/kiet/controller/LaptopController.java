package com.kiet.controller;

import com.kiet.model.Laptop;
import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.request.CreateLaptopRequest;
import com.kiet.service.LaptopService;
import com.kiet.service.ShopService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laptop")
public class LaptopController   {
    @Autowired
    private LaptopService laptopService;
    @Autowired
    private UserService userService;
    @Autowired
    private ShopService shopService;
    @GetMapping("/search")
    public ResponseEntity<List<Laptop>> searchLaptop(@RequestParam String name,
                                                    @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<Laptop> laptops = laptopService.searchLaptop(name);
        return new ResponseEntity<>(laptops, HttpStatus.CREATED);
    }

    @GetMapping("/shop/{shopId}")
    public ResponseEntity<List<Laptop>> getShopLaptop(@RequestParam (required = false) boolean refurbished,
                                                      @RequestParam (required = false) boolean gamingLaptop,
                                                     @RequestParam (required = false) boolean factorySealed,
                                                     @RequestParam(required = false) String laptop_category,
                                                     @PathVariable Long shopId,
                                                     @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        //Get laptops associated with the shop ID and apply filters
        List<Laptop> laptops = laptopService.getShopsLaptop(shopId,refurbished,gamingLaptop,factorySealed,laptop_category);
        return new ResponseEntity<>(laptops, HttpStatus.OK);
    }
}
