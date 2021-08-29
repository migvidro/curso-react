import { allReducers } from "./reducers/index.js";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

export { allReducers, initialState };
