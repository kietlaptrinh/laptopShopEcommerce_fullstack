package com.kiet.service;

import com.kiet.model.SpecificationCategory;
import com.kiet.model.SpecificationsItem;

import java.util.List;

public interface SpecificationsService {
    public SpecificationCategory createSpecificationCategory(String name, Long shopId) throws Exception;
    public SpecificationCategory findSpecificationCategoryById(Long id) throws Exception;
    public List<SpecificationCategory> findSpecificationCategoryByShopId(Long id) throws Exception;
    public SpecificationsItem createSpecificationsItem(Long shopId, String specificationName, Long categoryId) throws Exception;
    public List<SpecificationsItem> findShopsSpecifications(Long shopId);
    public SpecificationsItem updateStock(Long id) throws Exception;
}
