import {
  CREATE_SPECIFICATION_CATEGORY_SUCCESS,
  CREATE_SPECIFICATION_SUCCESS,
  GET_SPECIFICATION_CATEGORY_SUCCESS,
  GET_SPECIFICATIONS,
  UPDATE_STOCK,
} from "./ActionType";

const initialState = {
  specifications: [],
  update: null,
  category: [],
};

export const specificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIFICATIONS:
      return {
        ...state,
        specifications: action.payload,
      };
    case GET_SPECIFICATION_CATEGORY_SUCCESS:
      return { ...state, category: action.payload };
    case CREATE_SPECIFICATION_CATEGORY_SUCCESS:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case CREATE_SPECIFICATION_SUCCESS:
      return {
        ...state,
        specifications: [...state.specifications, action.payload],
      };
    case UPDATE_STOCK:
      return {
        ...state,
        update: action.payload,
        specifications: state.specifications.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
