package com.kiet.service;

import com.kiet.model.Category;

import java.util.List;

public interface CategoryService {
    public Category createCategory(String name, Long userId) throws Exception;


    public List<Category> findCategoryByShopId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;
}
