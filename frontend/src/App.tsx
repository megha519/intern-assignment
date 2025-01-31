import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, fetchStocks, setSelectedStock, setDuration } from "./store";
import StockSelector from "./components/StockSelector";
import DurationSelector from "./components/DurationSelector";
import StockChart from "./components/StockChart";
import { Container, Typography } from "@mui/material";

const AppContent = () => {
  const dispatch = useDispatch();
  const { stocks, selectedStock, duration } = useSelector((state: any) => state.stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Stock Market Dashboard 📈
      </Typography>
      <StockSelector stocks={stocks} onSelectStock={(id) => dispatch(setSelectedStock(id))} />
      {selectedStock && (
        <>
          <DurationSelector duration={duration} setDuration={(d) => dispatch(setDuration(d))} />
          <StockChart stockId={selectedStock} duration={duration} />
        </>
      )}
    </Container>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
