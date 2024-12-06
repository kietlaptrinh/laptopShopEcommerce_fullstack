import React, { useEffect } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import ShopCard from "../Shop/ShopCard";
import { Auth } from "../Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getAllShopsAction } from "../State/Shop/Action";
import { useNavigate } from "react-router-dom";
import { findCart } from "../State/Cart/Action";
const shops = [1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { shop } = useSelector((store) => store);
  const navigate = useNavigate();
  console.log("shop", shop);
  useEffect(() => {
    dispatch(getAllShopsAction(jwt));
  }, []);
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            KietLapTrinh.vn
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Laptop Thông Minh, Hành Trình Đột Phá!
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Laptop Bán Chạy
        </p>
        <MultiItemCarousel />
      </section>
      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-gray-400 pb-8">
          Khám phá thế giới laptop, chọn nơi bạn thuộc về!
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {shop.shops.map((item) => (
            <ShopCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
