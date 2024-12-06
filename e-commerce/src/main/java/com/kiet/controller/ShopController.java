package com.kiet.controller;

import com.kiet.dto.ShopDto;
import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.request.CreateShopRequest;
import com.kiet.service.ShopService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shops")
public class ShopController {
    @Autowired
    private ShopService shopService;
    @Autowired
    private UserService userService;
    @GetMapping("/search")
    public ResponseEntity<List<Shop>> searchShop(

            @RequestHeader("Authorization") String jwt,
            @RequestParam String keyword
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<Shop> shop = shopService.searchShop(keyword);
        return new ResponseEntity<>(shop, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Shop>> getAllShop(

            @RequestHeader("Authorization") String jwt

    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<Shop> shop = shopService.getAllShop();
        return new ResponseEntity<>(shop, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Shop> findShopById(

            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Shop shop = shopService.findShopById(id);
        return new ResponseEntity<>(shop, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<ShopDto> addToFavorites(

            @RequestHeader("Authorization") String jwt,

            @PathVariable Long id
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        ShopDto shop = shopService.addToFavorites(id, user);
        return new ResponseEntity<>(shop, HttpStatus.OK);
    }
}
