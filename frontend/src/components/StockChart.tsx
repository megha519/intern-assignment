import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const StockChart = ({ stockId, duration }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!stockId) return;

    const fetchStockData = () => {
      fetch(`/api/stocks/${stockId}`, {
        method: "POST",
        body: JSON.stringify({ duration }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setChartData({
            labels: data.map((entry) => entry.time),
            datasets: [{ label: "Stock Price", data: data.map((entry) => entry.price), borderColor: "blue" }],
          });
        });
    };

    const interval = setInterval(fetchStockData, 2000);
    return () => clearInterval(interval);
  }, [stockId, duration]);

  return <Line data={chartData} />;
};

export default StockChart;
