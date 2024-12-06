package com.kiet.controller;

import com.kiet.model.Category;
import com.kiet.model.User;
import com.kiet.service.CategoryService;
import com.kiet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {
    @Autowired

    private CategoryService categoryService;
    @Autowired
    private UserService userService;
    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category,
                                                   @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Category createdCategory = categoryService.createCategory(category.getName(), user.getId());
        return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
    }


    @GetMapping("/category/shop/{id}")
    public ResponseEntity<List<Category>> getShopCategory(
            @PathVariable Long id,
                                                         @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        //Retrieve the categories for the shop with the given ID
        List<Category> categories = categoryService.findCategoryByShopId(id);
        return new ResponseEntity<>(categories, HttpStatus.CREATED);
    }
}
