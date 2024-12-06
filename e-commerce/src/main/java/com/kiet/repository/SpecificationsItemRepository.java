package com.kiet.repository;

import com.kiet.model.SpecificationsItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecificationsItemRepository extends JpaRepository<SpecificationsItem,Long> {
    List<SpecificationsItem> findByShopId(Long id);
}
