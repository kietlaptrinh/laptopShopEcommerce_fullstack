import axios from "axios";

import {
  CREATE_SPECIFICATION_CATEGORY_SUCCESS,
  CREATE_SPECIFICATION_SUCCESS,
  GET_SPECIFICATION_CATEGORY_SUCCESS,
  GET_SPECIFICATIONS,
  UPDATE_STOCK,
} from "./ActionType";
import { api } from "../../config/api";

export const getSpecificationsOfShop = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/admin/specifications/shop/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get all specifications ", response.data);
      dispatch({ type: GET_SPECIFICATIONS, payload: response.data });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const createSpecification = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.post(`/api/admin/specifications`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create specifications ", response.data);
      dispatch({
        type: CREATE_SPECIFICATION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
};

export const createSpecificationCategory = ({ data, jwt }) => {
  console.log("data", data, "jwt", jwt);
  return async (dispatch) => {
    try {
      const response = await api.post(
        `/api/admin/specifications/category`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("create specifications category", response.data);
      dispatch({
        type: CREATE_SPECIFICATION_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getSpecificationCategory = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        `/api/admin/specifications/shop/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("get specifications category", response.data);
      dispatch({
        type: GET_SPECIFICATION_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
};

export const updateStockOfSpecification = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/admin/specifications/${id}/stoke`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      dispatch({ type: UPDATE_STOCK, payload: data });
      console.log("update specifications stock ", data);
    } catch (error) {
      console.log("error", error);
    }
  };
};
