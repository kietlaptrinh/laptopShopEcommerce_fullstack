import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { categorizeSpecifications } from "../util/CategorizeSpecifications";
import { Token } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";
// const specifications = [
//   { category: "Màu sắc", specifications: "Xanh" },
//   { category: "Card", specifications: "8GB-256GB" },
//   { category: "Qùa tặng ", specifications: "Bao da" },
// ];
const demo = [
  {
    category: "Bản quyền",
    specifications: ["Windows 11", "Antivirus", "BootGame"],
  },
  {
    category: "Voucher",
    specifications: ["giảm 10% lần sau", "thẻ garena 500"],
  },
];

const MenuCard = ({ item }) => {
  const [selectedSpecifications, setSelectedSpecifications] = useState([]);
  const dispatch = useDispatch();
  const handleCheckBoxChange = (itemName) => {
    console.log("value", itemName);
    if (selectedSpecifications.includes(itemName)) {
      setSelectedSpecifications(
        selectedSpecifications.filter((item) => item !== itemName)
      );
    } else {
      setSelectedSpecifications([...selectedSpecifications, itemName]);
    }
  }; // const handleFilter = (e) => {
  //   console.log(e.target.value, e.target.name);
  // };
  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        laptopId: item.id,
        quantity: 1,
        specifications: selectedSpecifications,
      },
    };
    dispatch(addItemToCart(reqData));
    console.log("reqData", reqData);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[15rem] h-[15rem] object-cover rounded"
              src={item.images[0]}
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>{item.price} $</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddItemToCart}>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(categorizeSpecifications(item.specifications)).map(
              (category) => (
                <div>
                  <p>{category}</p>
                  <FormGroup>
                    {categorizeSpecifications(item.specifications)[
                      category
                    ].map((item) => (
                      <FormControlLabel
                        key={item.id}
                        control={
                          <Checkbox
                            onChange={() => handleCheckBoxChange(item.name)}
                          />
                        }
                        label={item.name}
                      />
                    ))}
                  </FormGroup>
                </div>
              )
            )}
          </div>
          <div className="pt-5">
            <Button variant="contained" disable={false} type="submit">
              {true ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
