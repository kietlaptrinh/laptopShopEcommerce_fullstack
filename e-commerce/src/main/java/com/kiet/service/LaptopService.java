package com.kiet.service;

import com.kiet.model.Category;
import com.kiet.model.Laptop;
import com.kiet.model.Shop;
import com.kiet.request.CreateLaptopRequest;

import java.util.List;

public interface LaptopService {
    public Laptop createLaptop(CreateLaptopRequest req, Category category, Shop shop);
    void deleteLaptop(Long laptopId) throws Exception;

    //isDiscontinued laptop moi hay cu
    //isRefurbished laptop cu hay moi
    //isGamingLaptop laptop gaming hay ....
    public List<Laptop> getShopsLaptop(Long shopId, boolean isRefurbished,
                                       boolean isGamingLaptop, boolean isDiscontinued,
                                       String laptopCategory);
    public List<Laptop> searchLaptop(String keyword);
    public Laptop findLaptopById(Long laptopId) throws Exception;
    public Laptop updateAvailabilityStatus(Long laptopId) throws Exception;
}
