import { Token } from "@mui/icons-material";

import { type } from "@testing-library/user-event/dist/type";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_SHOP_FAILURE,
  CREATE_SHOP_REQUEST,
  CREATE_SHOP_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_SHOP_FAILURE,
  DELETE_SHOP_REQUEST,
  DELETE_SHOP_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_SHOPS_FAILURE,
  GET_ALL_SHOPS_REQUEST,
  GET_ALL_SHOPS_SUCCESS,
  GET_SHOP_BY_ID_FAILURE,
  GET_SHOP_BY_ID_REQUEST,
  GET_SHOP_BY_ID_SUCCESS,
  GET_SHOP_BY_USER_ID_FAILURE,
  GET_SHOP_BY_USER_ID_REQUEST,
  GET_SHOP_BY_USER_ID_SUCCESS,
  GET_SHOPS_CATEGORY_FAILURE,
  GET_SHOPS_CATEGORY_REQUEST,
  GET_SHOPS_CATEGORY_SUCCESS,
  GET_SHOPS_EVENTS_FAILURE,
  GET_SHOPS_EVENTS_REQUEST,
  GET_SHOPS_EVENTS_SUCCESS,
  UPDATE_SHOP_STATUS_FAILURE,
  UPDATE_SHOP_STATUS_REQUEST,
  UPDATE_SHOP_STATUS_SUCCESS,
} from "./ActionType";
import { api } from "../../config/api";

export const getAllShopsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_SHOPS_REQUEST });
    try {
      const { data } = await api.get("/api/shops", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_SHOPS_SUCCESS, payload: data });
      console.log("all shop", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_ALL_SHOPS_FAILURE, payload: error });
    }
  };
};

export const getShopById = ({ reqData }) => {
  return async (dispatch) => {
    dispatch({ type: GET_SHOP_BY_ID_REQUEST });
    try {
      const response = await api.get(`api/shops/${reqData.shopId}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch({ type: GET_SHOP_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_SHOP_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getShopByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_SHOP_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/shops/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get shop by user id", data);
      dispatch({ type: GET_SHOP_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_SHOP_BY_USER_ID_FAILURE, payload: error.message });
    }
  };
};

export const createShop = (reqData) => {
  console.log("token----------", reqData.token);
  return async (dispatch) => {
    dispatch({ type: CREATE_SHOP_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/shops`, reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: CREATE_SHOP_SUCCESS, payload: data });
      console.log("create shop", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: CREATE_SHOP_FAILURE, payload: error });
    }
  };
};

export const updateShop = ({ shopId, shopData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_SHOP_STATUS_REQUEST });
    try {
      const res = await api.put(`api/admin/shops/${shopId}`, shopData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_SHOP_STATUS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: UPDATE_SHOP_STATUS_FAILURE, payload: error });
    }
  };
};

export const deleteShop = ({ shopId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SHOP_REQUEST });
    try {
      const res = await api.delete(`/api/admin/shop/${shopId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete shop", res.data);
      dispatch({ type: DELETE_SHOP_SUCCESS, payload: shopId });
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: DELETE_SHOP_FAILURE, payload: error });
    }
  };
};

export const updateShopStatus = ({ shopId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_SHOP_STATUS_REQUEST });
    try {
      const res = await api.put(
        `api/admin/shops/${shopId}/status`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("res", res.data);
      dispatch({ type: UPDATE_SHOP_STATUS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: UPDATE_SHOP_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, jwt, shopId }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const res = await api.post(`api/admin/events/shop/${shopId}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create events", res.data);
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getAllEvents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const res = await api.get(`api/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get all events ", res.data);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      const res = await api.delete(`api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete events ", res.data);
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};
export const getShopsEvents = ({ shopId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_SHOPS_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/admin/events/shop/${shopId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get shops event ", res.data);
      dispatch({ type: GET_SHOPS_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_SHOPS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.post(`api/admin/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create category ", res.data);
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getShopsCategory = ({ jwt, shopId }) => {
  return async (dispatch) => {
    dispatch({ type: GET_SHOPS_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/category/shop/${shopId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get shops category ", res.data);
      dispatch({ type: GET_SHOPS_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_SHOPS_CATEGORY_FAILURE, payload: error });
    }
  };
};
