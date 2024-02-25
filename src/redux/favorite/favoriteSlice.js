import { createSlice } from "@reduxjs/toolkit";
import { handleFulfilledFavorites } from "./favoriteReducer";
import { fetchFavorites } from "./favoriteOperation";
import { toast } from "react-hot-toast";

const initialState = {
  favorites: [],
  error: null,
  isLoading: true,
  status: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      toast.success("Teacher is added to your favorites!", {
        duration: 2800,
        position: "top-center",
      });
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (teacher) => teacher.id !== action.payload
      );

      toast.success("Teacher is removed from your favorites!", {
        duration: 2800,
        position: "top-center",
      });
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, handleFulfilledFavorites);
  },
});
export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
