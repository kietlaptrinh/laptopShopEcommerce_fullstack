import { SatelliteAlt } from "@mui/icons-material";
import * as actionTypes from "./ActionType";
const initialState = {
  shops: [],
  usersShop: null,
  shop: null,
  loading: false,
  error: null,
  events: [],
  shopsEvents: [],
  categories: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SHOP_REQUEST:
    case actionTypes.GET_ALL_SHOPS_REQUEST:
    case actionTypes.DELETE_SHOP_REQUEST:
    case actionTypes.UPDATE_SHOP_REQUEST:
    case actionTypes.GET_SHOP_BY_ID_REQUEST:
    case actionTypes.CREATE_CATEGORY_REQUEST:
    case actionTypes.GET_SHOPS_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.CREATE_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        usersShop: action.payload,
      };
    case actionTypes.GET_ALL_SHOPS_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
      };
    case actionTypes.GET_SHOP_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload,
      };
    case actionTypes.GET_SHOP_BY_USER_ID_SUCCESS:
    case actionTypes.UPDATE_SHOP_STATUS_SUCCESS:
    case actionTypes.UPDATE_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        usersShop: action.payload,
      };
    case actionTypes.DELETE_SHOP_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        shops: state.shops.filter((item) => item.id !== action.payload),
        usersShop: state.usersShop.filter((item) => item.id !== action.payload),
      };

    case actionTypes.CREATE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: [...state.events, action.payload],
        shopsEvents: [...state.shopsEvents, action.payload],
      };
    case actionTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case actionTypes.GET_SHOPS_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        shopsEvents: action.payload,
      };
    case actionTypes.DELETE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter((item) => item.id !== action.payload),
        shopsEvents: state.shopsEvents.filter(
          (item) => item.id !== action.payload
        ),
      };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case actionTypes.GET_SHOPS_CATEGORY_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case actionTypes.CREATE_SHOP_FAILURE:
    case actionTypes.GET_ALL_SHOPS_FAILURE:
    case actionTypes.DELETE_SHOP_FAILURE:
    case actionTypes.UPDATE_SHOP_FAILURE:
    case actionTypes.GET_SHOP_BY_ID_FAILURE:
    case actionTypes.CREATE_EVENTS_FAILURE:
    case actionTypes.CREATE_CATEGORY_FAILURE:
    case actionTypes.GET_SHOPS_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
