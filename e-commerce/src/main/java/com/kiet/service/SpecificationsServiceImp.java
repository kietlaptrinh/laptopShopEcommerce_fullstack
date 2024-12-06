package com.kiet.service;

import com.kiet.model.Shop;
import com.kiet.model.SpecificationCategory;
import com.kiet.model.SpecificationsItem;
import com.kiet.repository.SpecificationCategoryRepository;
import com.kiet.repository.SpecificationsItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecificationsServiceImp implements SpecificationsService{
    @Autowired
    private SpecificationsItemRepository specificationsItemRepository;
    @Autowired
    private SpecificationCategoryRepository specificationCategoryRepository;
    @Autowired
    private ShopService shopService;

    @Override
    public SpecificationCategory createSpecificationCategory(String name, Long shopId) throws Exception {
        Shop shop = shopService.findShopById(shopId);
        SpecificationCategory category = new SpecificationCategory();
        category.setName(name);

        return specificationCategoryRepository.save(category);
    }

    @Override
    public SpecificationCategory findSpecificationCategoryById(Long id) throws Exception {
        Optional<SpecificationCategory> opt = specificationCategoryRepository.findById(id);
        if (opt.isEmpty()){
            throw new Exception("specification category not found");

        }
        return opt.get();
    }

    @Override
    public List<SpecificationCategory> findSpecificationCategoryByShopId(Long id) throws Exception {
        shopService.findShopById(id);
        return specificationCategoryRepository.findByShopId(id);
    }

    @Override
    public SpecificationsItem createSpecificationsItem(Long shopId, String specificationName, Long categoryId) throws Exception {
        Shop shop = shopService.findShopById(shopId);
        SpecificationCategory category = findSpecificationCategoryById(categoryId);
        SpecificationsItem item = new SpecificationsItem();
        item.setName(specificationName);
        item.setShop(shop);
        item.setCategory(category);
        SpecificationsItem specifications = specificationsItemRepository.save(item);
        category.getSpecifications().add(specifications);
        return specifications;
    }

    @Override
    public List<SpecificationsItem> findShopsSpecifications(Long shopId) {

        return specificationsItemRepository.findByShopId(shopId);
    }

    @Override
    public SpecificationsItem updateStock(Long id) throws Exception {
        Optional<SpecificationsItem> optionalSpecificationsItem = specificationsItemRepository.findById(id);
        if (optionalSpecificationsItem.isEmpty()){
            throw new Exception("specification not found");
        }
        SpecificationsItem specificationsItem = optionalSpecificationsItem.get();
        specificationsItem.setInStoke(!specificationsItem.isInStoke());
        return specificationsItemRepository.save(specificationsItem);
    }
}
