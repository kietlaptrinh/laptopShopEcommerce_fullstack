package com.kiet.service;

import com.kiet.dto.ShopDto;
import com.kiet.model.Address;
import com.kiet.model.Shop;
import com.kiet.model.User;
import com.kiet.repository.AddressRepository;
import com.kiet.repository.ShopRepository;
import com.kiet.repository.UserRepository;
import com.kiet.request.CreateShopRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ShopServiceImp implements ShopService{


    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public Shop createShop(CreateShopRequest req, User user) {
        Address address = addressRepository.save(req.getAddress());

        Shop shop = new Shop();
        shop.setAddress(address);
        shop.setContactInformation(req.getContactInformation());
        shop.setUsageType(req.getUsageType());
        shop.setDescription(req.getDescription());
        shop.setImages(req.getImages());
        shop.setName(req.getName());
        shop.setSupportHours(req.getSupportHours());
        shop.setRegistrationDate(LocalDateTime.now());
        shop.setOwner(user);
        return shopRepository.save(shop);
    }

    @Override
    public Shop updateShop(Long shopId, CreateShopRequest updatedShop) throws Exception {
        Shop shop = findShopById(shopId);
        if (updatedShop.getUsageType()!=null){
            shop.setUsageType(updatedShop.getUsageType());
        }
        if (shop.getDescription()!=null){
            shop.setDescription(updatedShop.getDescription());
        }
        if (shop.getName()!=null){
            shop.setName(updatedShop.getName());
        }
        return shopRepository.save(shop);
    }

    @Override
    public void deleteShop(Long shopId) throws Exception {
        Shop shop = findShopById(shopId);
        shopRepository.delete(shop);

    }

    @Override
    public List<Shop> getAllShop() {
        return shopRepository.findAll();
    }

    @Override
    public List<Shop> searchShop(String keyword) {
        return shopRepository.findBySearchQuery(keyword);
    }

    @Override
    public Shop findShopById(Long id) throws Exception {
        Optional<Shop> opt = shopRepository.findById(id);
        if (opt.isEmpty()){
            throw new Exception("shop not found with id"+id);
        }
        return opt.get();
    }

    @Override
    public Shop getShopByUserId(Long userId) throws Exception {
        Shop shop = shopRepository.findByOwnerId(userId);
        if (shop==null){
            throw new Exception("shop not found with owner id"+userId);
        }
        return shop;
    }

    @Override
    public ShopDto addToFavorites(Long shopId, User user) throws Exception {
        Shop shop = findShopById(shopId);
        ShopDto dto = new ShopDto();
        dto.setDescription(shop.getDescription());
        dto.setImages(shop.getImages());
        dto.setTitle(shop.getName());
        dto.setId(shopId);
        boolean isFavorited = false;
        List<ShopDto> favorites = user.getFavorites();
        for (ShopDto favorite : favorites){
            if (favorite.getId().equals(shopId)){
                isFavorited = true;
                break;
            }
        }
        if (isFavorited){
            favorites.removeIf(favorite -> favorite.getId().equals(shopId));
        } else {
            favorites.add(dto);
        }
        userRepository.save(user);
        return dto;
    }

    @Override
    public Shop updateShopStatus(Long id) throws Exception {
        Shop shop = findShopById(id);
        shop.setActive(!shop.isActive());
        return shopRepository.save(shop);


    }
}
