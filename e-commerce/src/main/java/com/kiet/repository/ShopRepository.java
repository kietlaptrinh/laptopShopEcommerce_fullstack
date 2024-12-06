package com.kiet.repository;

import com.kiet.model.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShopRepository extends JpaRepository<Shop, Long> {
    @Query("SELECT s FROM Shop s WHERE lower(s.name) LIKE lower(concat('%',:query, '%'))"+
            "OR lower(s.usageType) LIKE lower(concat('%', :query, '%'))")
    List<Shop> findBySearchQuery(String query);
    Shop findByOwnerId(Long userId);
}
