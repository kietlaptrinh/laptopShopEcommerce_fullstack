import React from "react";
import ShopCard from "../Shop/ShopCard";
import { useSelector } from "react-redux";

export default function Favorites() {
  const { auth } = useSelector((store) => store);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">
        Danh Mục Yêu Thích
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {auth.favorites.map((item) => (
          <ShopCard item={item} />
        ))}
      </div>
    </div>
  );
}
