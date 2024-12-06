import axios from "axios";

import {
  GET_SHOPS_ORDERS_FAILURE,
  GET_SHOPS_ORDERS_REQUEST,
  GET_SHOPS_ORDERS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./ActionType.js";
import { api } from "../../config/api.js";
import { UPDATE_ORDER_STATUS_REQUEST } from "./ActionType.js";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
      const response = await api.put(
        `/api/admin/order/${orderId}/${orderStatus}`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      const updatedOrder = response.data;
      console.log("updated order ", updatedOrder);
      dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder });
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, error });
    }
  };
};

export const fetchShopsOrder = ({ shopId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SHOPS_ORDERS_REQUEST });
      const { data } = await api.get(`/api/admin/order/shop/${shopId}`, {
        params: { order_status: orderStatus },
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const orders = data;
      console.log("shops order ----------", orders);
      dispatch({ type: GET_SHOPS_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_SHOPS_ORDERS_FAILURE, error });
    }
  };
};
