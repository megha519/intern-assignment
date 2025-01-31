import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const DurationSelector = ({ duration, setDuration }) => {
  return (
    <ToggleButtonGroup
      value={duration}
      exclusive
      onChange={(e, newDuration) => newDuration && setDuration(newDuration)}
      sx={{ my: 2 }}
    >
      <ToggleButton value="1D">1 Day</ToggleButton>
      <ToggleButton value="1W">1 Week</ToggleButton>
      <ToggleButton value="1M">1 Month</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DurationSelector;
