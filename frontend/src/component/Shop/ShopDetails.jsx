import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Label } from "@mui/icons-material";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShopById, getShopsCategory } from "../State/Shop/Action";
import { getMenuItemsByShopId } from "../State/Menu/Action";

const laptopTypes = [
  { label: "Tất cả", value: "all" },
  { label: "Laptop Mới", value: "factorySealed" },
  { label: "Laptop Tân Trang", value: "refurbished" },
  { label: "Laptop Gaming", value: "gamingLaptop" },
];
const menu = [1, 1, 1, 1, 1, 1];
const ShopDetails = () => {
  const [laptopType, setLaptopType] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, shop, menu } = useSelector((store) => store);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id, city } = useParams();
  //chat gpt
  const selectedShop =
    shop.shop || shop.shops?.find((item) => item.id === parseInt(id));

  const handleFilter = (e) => {
    setLaptopType(e.target.value);
    console.log(e.target.value, e.target.name);
  };

  const handleFilterCategory = (e, value) => {
    setSelectedCategory(value);
    console.log(e.target.value, e.target.name, value);
  };
  console.log("shop", shop);
  useEffect(() => {
    dispatch(getShopById({ jwt, shopId: id }));
    dispatch(getShopsCategory({ jwt, shopId: id }));
  }, []);
  useEffect(() => {
    dispatch(
      getMenuItemsByShopId({
        jwt,
        shopId: id,
        isRefurbished: laptopType === "refurbished",
        isDiscontinued: laptopType === "factorySealed",
        isGamingLaptop: laptopType === "gamingLaptop",
        laptopCategory: selectedCategory,
      })
    );
  }, [selectedCategory, laptopType]);
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/VietNam/LaptopXin/254</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={selectedShop?.images[0]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={selectedShop?.images[1]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={selectedShop?.images[2]}
                // src="https://cdn.cultofmac.com/wp-content/uploads/2016/10/apple-regent-street-5.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">{shop.shop?.name}</h1>
          <p className="text-gray-500 mt-1">{shop.shop?.description}</p>
          <div className="space-y-3 mt-3">
            {" "}
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>610B Điện Phong Điện Bàn Quảng Nam</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonthIcon />
              <span>Thu 2-Thu 7: 8h00 AM --- 8:00 PM</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 d">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Nhu cầu laptop
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="laptop_type"
                  value={laptopType}
                >
                  {laptopTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      s
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Danh mục laptop
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilterCategory}
                  name="laptop_category"
                  value={selectedCategory}
                >
                  {shop.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopDetails;
