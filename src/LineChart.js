// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import './styles.css';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const LineChart = ({ labels, salesData, expensesData }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sales',
        data: salesData,
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
      {
        label: 'Expenses',
        data: expensesData,
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Sales and Expenses Over Time</h2>
      <h2>Line Chart</h2>
      <div className="chart-wrapper">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
