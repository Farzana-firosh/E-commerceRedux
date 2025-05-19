import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewProducts = createAsyncThunk(
  "Products/fetchNewProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const initialState = {
  NewProducts: [],
  inProgress: false,
  error: null,
};

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setNewProducts: (state, action) => {
      state.NewProducts = action.payload;
    },
    setOfferProducts: (state, action) => {
      state.offerProducts = action.payload;
    },
    clearOfferProducts: (state) => {
      state.offerProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewProducts.pending, (state) => {
      state.inProgress = true;
    });
    builder.addCase(fetchNewProducts.fulfilled, (state, action) => {
      state.inProgress = false;
      state.NewProducts = action.payload;
    });
    builder.addCase(fetchNewProducts.rejected, (state, action) => {
      state.inProgress = false;
      state.error = action.error.message;
    });
  },
});

export const { setNewProducts, setOfferProducts, clearOfferProducts } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
