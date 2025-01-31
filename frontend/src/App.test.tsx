import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

test("renders stock selector", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const selectElement = screen.getByText(/Select a Stock/i);
  expect(selectElement).toBeInTheDocument();
});
