import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSpecification,
  createSpecificationCategory,
  getSpecificationsOfShop,
} from "../../component/State/Specifications/Action";

const CreateSpecificationForm = () => {
  const { shop, specifications } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      shopId: shop.usersShop.id,
    };
    dispatch(createSpecification({ data, jwt }));
    console.log(data);
    // dispatch(createSpecificationCategory({ data, jwt }));
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
          Tạo Phụ Kiện Mới
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="loại phụ kiện"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Phụ Kiện Đi Kèm
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.categoryId}
              label="Category"
              onChange={handleInputChange}
              name="categoryId"
            >
              {specifications.category.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Tạo Phụ Kiện
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateSpecificationForm;
