import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Stock {
  id: string;
  name: string;
}

interface StockState {
  stocks: Stock[];
  selectedStock: string | null;
  duration: string;
}

const initialState: StockState = {
  stocks: [],
  selectedStock: null,
  duration: "1D",
};

export const fetchStocks = createAsyncThunk("stocks/fetchStocks", async () => {
  const response = await fetch("/api/stocks");
  return response.json();
});

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;
    });
  },
});

export const { setSelectedStock, setDuration } = stockSlice.actions;

export const store = configureStore({
  reducer: { stocks: stockSlice.reducer },
});
