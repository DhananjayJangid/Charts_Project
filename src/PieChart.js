// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './styles.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ sales, expenses, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: [sales[0], expenses[0]],
        backgroundColor: ['#42A5F5', '#FF6384'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Sales vs Expenses</h2>
      <h2>Pie Chart</h2>
      <div className="chart-wrapper">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
