package com.kiet.controller;

import com.kiet.model.SpecificationCategory;
import com.kiet.model.SpecificationsItem;
import com.kiet.request.SpecificationCategoryRequest;
import com.kiet.request.SpecificationRequest;
import com.kiet.service.SpecificationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/specifications")
public class SpecificationsController {
    @Autowired
    private SpecificationsService specificationsService;
    @PostMapping("/category")
    public ResponseEntity<SpecificationCategory> createSpecificationCategory(
            @RequestBody SpecificationCategoryRequest req
            ) throws Exception{
        SpecificationCategory item = specificationsService.createSpecificationCategory(req.getName(), req.getShopId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<SpecificationsItem> createSpecificationsItem(
            @RequestBody SpecificationRequest req
    ) throws Exception{
        SpecificationsItem item = specificationsService.createSpecificationsItem(req.getShopId(), req.getName(),
                req.getCategoryId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }


    @PutMapping("/{id}/stoke")
    public ResponseEntity<SpecificationsItem> updateSpecificationsStoke(
            @PathVariable Long id
    ) throws Exception{
        SpecificationsItem item = specificationsService.updateStock(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }


    @GetMapping("/shop/{id}")
    public ResponseEntity<List<SpecificationsItem>> getShopSpecification(
            @PathVariable Long id
    ) throws Exception{
        List<SpecificationsItem> items = specificationsService.findShopsSpecifications(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }


    @GetMapping("/shop/{id}/category")
    public ResponseEntity<List<SpecificationCategory>> getShopSpecificationCategory(
            @PathVariable Long id
    ) throws Exception{
        List<SpecificationCategory> items = specificationsService.findSpecificationCategoryByShopId(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}



