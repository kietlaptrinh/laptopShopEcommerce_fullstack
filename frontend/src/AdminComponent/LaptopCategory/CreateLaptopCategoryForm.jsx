import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../component/State/Shop/Action";

const CreateLaptopCategoryForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ categoryName: "", shopId: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const data = {
      name: formData.categoryName,
      shopId: {
        id: 1,
      },
    };
    dispatch(
      createCategoryAction({ reqData: data, jwt: localStorage.getItem("jwt") })
    );
    console.log(data);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep existing form data
      [name]: value, // Update the field that was changed
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Tạo Hãng Laptop Mới
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="categoryName"
            name="categoryName"
            label="Hãng Laptop"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.categoryName}
          ></TextField>
          <Button variant="contained" type="submit">
            Tạo Danh Mục
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateLaptopCategoryForm;
