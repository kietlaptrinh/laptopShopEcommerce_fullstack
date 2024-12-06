package com.kiet.repository;

import com.kiet.model.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, Long> {
    List<Laptop> findByShopId(Long shopId);
    @Query("SELECT l FROM Laptop l WHERE l.name LIKE %:keyword% OR l.laptopCategory.name LIKE %:keyword%")
    List<Laptop> searchLaptop(@Param("keyword") String keyword);


}
