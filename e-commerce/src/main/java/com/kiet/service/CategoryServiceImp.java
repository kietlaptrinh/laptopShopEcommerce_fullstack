package com.kiet.service;

import com.kiet.model.Category;
import com.kiet.model.Shop;
import com.kiet.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImp implements CategoryService{
    @Autowired

    private ShopService shopService;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Shop shop = shopService.getShopByUserId(userId);
        Category category = new Category();
        category.setName(name);
        category.setShop(shop);


        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByShopId(Long id) throws Exception {
        Shop shop = shopService.findShopById(id);
        return categoryRepository.findByShopId(id);
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (optionalCategory.isEmpty()){
            throw new Exception("category not found");
        }
        return optionalCategory.get();
    }
}
