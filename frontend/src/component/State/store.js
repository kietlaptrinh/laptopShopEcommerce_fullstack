import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk"; // Import chính xác
import shopReducer from "./Shop/Reducer";
import menuItemsReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import shopsOrderReducer from "./Shop Order/Reducer";
import { specificationReducer } from "./Specifications/Reducer";

// Kết hợp các reducer
const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  menu: menuItemsReducer,
  cart: cartReducer,
  order: orderReducer,
  shopOrder: shopsOrderReducer,
  specifications: specificationReducer,
});

// Tạo store với middleware thunk
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
