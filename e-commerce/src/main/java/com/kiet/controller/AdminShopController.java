package com.kiet.controller;

import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.request.CreateShopRequest;
import com.kiet.response.MessageResponse;
import com.kiet.service.ShopService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/shops")
public class AdminShopController {
    @Autowired
    private ShopService shopService;
    @Autowired
    private UserService userService;
    @PostMapping()
    public ResponseEntity<Shop> createShop(
        @RequestBody CreateShopRequest req,
        @RequestHeader("Authorization") String jwt
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Shop shop = shopService.createShop(req, user);
        return new ResponseEntity<>(shop, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Shop> updateShop(
            @RequestBody CreateShopRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Shop shop = shopService.updateShop(id,req);
        return new ResponseEntity<>(shop, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteShop(

            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        shopService.deleteShop(id);
        MessageResponse res = new MessageResponse();
        res.setMessage("shop deleted successfully");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    @PutMapping("/{id}/status")
    public ResponseEntity<Shop> updateShopStatus(

            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        Shop shop = shopService.updateShopStatus(id);

        return new ResponseEntity<>(shop, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<Shop> findShopByUserId    (

            @RequestHeader("Authorization") String jwt
    ) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
    //Retrieve the shop associated with the authenticated user
        Shop shop = shopService.getShopByUserId(user.getId());

        return new ResponseEntity<>(shop, HttpStatus.OK);
    }
}
