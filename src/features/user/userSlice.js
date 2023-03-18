import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/consts";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    favorite: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    addItemToFavorite: (state, { payload }) => {
      let newFavorite = [...state.favorite];
      const found = state.favorite.find(({ id }) => id === payload.id);

      if (found) {
        newFavorite = newFavorite.map((item) => {
          return item.id === payload.id
            ? {  }
            : item;
        });
      } else newFavorite.push({ ...payload });

      state.favorite = newFavorite;
    },
    removeItemFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(({ id }) => id !== payload);
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    //builder.addCase(loginUser.fulfilled, addCurrentUser);
    //builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, removeItemFromCart, addItemToFavorite, removeItemFromFavorite, toggleForm, toggleFormType } =
  userSlice.actions;

export default userSlice.reducer;