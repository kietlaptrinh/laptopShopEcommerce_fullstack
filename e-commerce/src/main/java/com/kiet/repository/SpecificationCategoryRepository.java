package com.kiet.repository;

import com.kiet.model.SpecificationCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecificationCategoryRepository extends JpaRepository<SpecificationCategory, Long> {
    List<SpecificationCategory> findByShopId(Long id);
}
