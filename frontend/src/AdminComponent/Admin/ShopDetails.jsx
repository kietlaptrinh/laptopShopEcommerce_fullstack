import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch, useSelector } from "react-redux";
import { updateShopStatus } from "../../component/State/Shop/Action";

export const ShopDetails = () => {
  const { shop } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleShopStatus = () => {
    dispatch(
      updateShopStatus({
        shopId: shop.usersShop.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };
  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {shop.usersShop?.name}
        </h1>
        <div>
          <Button
            color={!shop.usersShop?.active ? "primary" : "error"}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleShopStatus}
            size="large"
          >
            {shop.usersShop?.active ? "Ngừng Hỗ Trợ" : "Đang Hỗ Trợ"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Thông Tin Cửa Hàng</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Cửa hàng</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.owner.fullName}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Tên Cửa Hàng</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.name}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Hãng Laptop</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.usageType}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Giờ Hỗ Trợ</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.supportHours}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Trạng Thái</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.active ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Đang Hỗ Trợ
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-950">
                        Ngừng Hỗ Trợ
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Địa Chỉ</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Quốc Gia</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Việt Nam
                    {/* {shop.usersShop?.country} */}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Đà Nẵng
                    {/* {shop.usersShop?.city} */}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    500000
                    {/* {shop.usersShop?.postalCode} */}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Địa Chỉ</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    08 Hà Văn Tính
                    {/* {shop.usersShop?.streetAddress} */}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Liên hệ</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.contactInformation?.email}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Số Điện Thoại</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {shop.usersShop?.contactInformation?.mobile}
                  </p>
                </div>

                <div className="flex">
                  <p className="w-48">Mạng Xã Hội</p>
                  <div className="flex text-gray-400 items-center pb-3 gap-2">
                    <span className="pr-5">-</span>
                    <a href={shop.usersShop?.contactInformation?.instagram}>
                      <InstagramIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href={shop.usersShop?.contactInformation?.twitter}>
                      <TwitterIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <LinkedInIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <FacebookIcon sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShopDetails;
