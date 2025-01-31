import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const StockSelector = ({ stocks, onSelectStock }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Select a Stock</InputLabel>
      <Select defaultValue="" onChange={(e) => onSelectStock(e.target.value)}>
        {stocks.map((stock) => (
          <MenuItem key={stock.id} value={stock.id}>
            {stock.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StockSelector;
