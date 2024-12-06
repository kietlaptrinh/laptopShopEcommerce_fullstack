package com.kiet.service;

import com.kiet.model.Category;
import com.kiet.model.Laptop;
import com.kiet.model.Shop;
import com.kiet.repository.LaptopRepository;
import com.kiet.request.CreateLaptopRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LaptopServiceImp implements LaptopService{
    @Autowired
    private LaptopRepository laptopRepository;
    @Override
    public Laptop createLaptop(CreateLaptopRequest req, Category category, Shop shop) {
        //Create a new Laptop object and set its properties
        Laptop laptop = new Laptop();
        laptop.setLaptopCategory(category);
        laptop.setShop(shop);
        laptop.setDescription(req.getDescription());
        laptop.setImages(req.getImages());
        laptop.setName(req.getName());
        laptop.setPrice(req.getPrice());
        laptop.setSpecifications(req.getSpecifications());
        laptop.setGamingLaptop(req.isGamingLaptop());
        laptop.setCreationDate(new Date());
        laptop.setRefurbished(req.isRefurbished());
        Laptop savedLaptop =  laptopRepository.save(laptop);
        shop.getLaptops().add(savedLaptop);
        return savedLaptop;
    }

    @Override
    public void deleteLaptop(Long laptopId) throws Exception {
        Laptop laptop = findLaptopById(laptopId);
        laptop.setShop(null);
        laptopRepository.save(laptop);
    }

    @Override
    public List<Laptop> getShopsLaptop(Long shopId, boolean isRefurbished,
                                       boolean isGamingLaptop, boolean isFactorySealed,
                                       String laptopCategory) {
        //Retrieve all laptops from the specified shop
        List<Laptop> laptops = laptopRepository.findByShopId(shopId);
        //Apply various filters based on the parameters
        if (isRefurbished){
            laptops = filterByRefurbished(laptops,isRefurbished);
        }
        if (isFactorySealed){
            laptops = filterByFactorySealed(laptops,isFactorySealed);
        }
        if (isGamingLaptop){
            laptops = filterByGamingLaptop(laptops,isGamingLaptop);
        }
        if (laptopCategory != null & !laptopCategory.equals("")){
            laptops = filterByCategory(laptops,laptopCategory);
        }
        return laptops;
    }

    private List<Laptop> filterByCategory(List<Laptop> laptops, String laptopCategory) {
        return laptops.stream().filter(laptop -> {
            if (laptop.getLaptopCategory() != null){
                return laptop.getLaptopCategory().getName().equals(laptopCategory);
            }
            return false;
        }).collect(Collectors.toList());
    }

    private List<Laptop> filterByGamingLaptop(List<Laptop> laptops, boolean isGamingLaptop) {
        return laptops.stream().filter(laptop -> laptop.isGamingLaptop() == isGamingLaptop).collect(Collectors.toList());
    }

    private List<Laptop> filterByFactorySealed(List<Laptop> laptops, boolean isFactorySealed) {
        return laptops.stream().filter(laptop -> laptop.isRefurbished() == false).collect(Collectors.toList());
    }

    private List<Laptop> filterByRefurbished(List<Laptop> laptops, boolean isRefurbished) {
        return laptops.stream().filter(laptop -> laptop.isRefurbished() == isRefurbished).collect(Collectors.toList());
    }

    @Override
    public List<Laptop> searchLaptop(String keyword) {
        return laptopRepository.searchLaptop(keyword);
    }

    @Override
    public Laptop findLaptopById(Long laptopId) throws Exception {
        Optional<Laptop> optionalLaptop = laptopRepository.findById(laptopId);
        if (optionalLaptop.isEmpty()){
            throw new Exception("laptop not exist");
        }
        return optionalLaptop.get();
    }

    @Override
    public Laptop updateAvailabilityStatus(Long laptopId) throws Exception {
        Laptop laptop = findLaptopById(laptopId);
        laptop.setAvailable(!laptop.isAvailable());

        return laptopRepository.save(laptop);
    }
}
