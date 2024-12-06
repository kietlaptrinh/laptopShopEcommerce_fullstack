package com.kiet.controller;

import com.kiet.model.Laptop;
import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.request.CreateLaptopRequest;
import com.kiet.response.MessageResponse;
import com.kiet.service.LaptopService;
import com.kiet.service.ShopService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/laptop")
public class AdminLaptopController {
    @Autowired
    private LaptopService laptopService;
    @Autowired
    private UserService userService;
    @Autowired
    private ShopService shopService;
    @PostMapping
     public ResponseEntity<Laptop> createLaptop(@RequestBody CreateLaptopRequest req,
                                                @RequestHeader("Authorization") String jwt) throws Exception{
         User user = userService.findUserByJwtToken(jwt);
         Shop shop = shopService.getShopByUserId(user.getId());
         Laptop laptop = laptopService.createLaptop(req,req.getCategory(),shop);
         return new ResponseEntity<>(laptop, HttpStatus.CREATED);
     }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteLaptop(@PathVariable Long id,
                                                        @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        laptopService.deleteLaptop(id);
        MessageResponse res = new MessageResponse();
        res.setMessage("laptop deleted successfully");
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Laptop> updateLaptopAvailabilityStatus(@PathVariable Long id,
                                                        @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        Laptop laptop = laptopService.updateAvailabilityStatus(id);

        return new ResponseEntity<>(laptop, HttpStatus.CREATED);
    }

}
