import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpecificationCategory } from "../../component/State/Specifications/Action";

const CreateSpecificationCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { shop } = useSelector((store) => store);

  const [formData, setFormData] = useState({ name: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: formData.name, shopId: shop.usersShop.id };
    console.log(formData);
    dispatch(createSpecificationCategory({ data, jwt }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Tạo Phụ Kiện Theo Hãng
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Phụ Kiện Theo Hãng"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Tạo Danh Mục
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateSpecificationCategoryForm;
