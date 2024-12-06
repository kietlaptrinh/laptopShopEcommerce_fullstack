package com.kiet.service;

import com.kiet.dto.ShopDto;
import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.request.CreateShopRequest;

import java.util.List;

public interface ShopService {
    public Shop createShop(CreateShopRequest req, User user);

    public Shop updateShop(Long shopId, CreateShopRequest updatedShop) throws Exception;
    public void deleteShop(Long shopId) throws Exception;
    public List<Shop> getAllShop();
    public List<Shop> searchShop(String keyword);
    public Shop findShopById(Long id) throws Exception;
    public Shop getShopByUserId(Long userId) throws Exception;
    public ShopDto addToFavorites(Long shopId, User user) throws Exception;
    public Shop updateShopStatus(Long id) throws Exception;
}
