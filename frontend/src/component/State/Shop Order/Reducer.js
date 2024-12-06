import { error } from "yupp/util/logger";
import {
  GET_SHOPS_ORDERS_FAILURE,
  GET_SHOPS_ORDERS_REQUEST,
  GET_SHOPS_ORDERS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./ActionType";
import { loadEnvFile } from "process";

const initialState = {
  loading: false,
  error: null,
  orders: [],
};

const shopsOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPS_ORDERS_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_SHOPS_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case UPDATE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
      return { ...state, loading: false, orders: updatedOrders };
    case GET_SHOPS_ORDERS_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default shopsOrderReducer;
