// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './styles.css';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Amount',
        data: data,
        backgroundColor: ['#42A5F5', '#FF6384'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Sales and Expenses Comparison</h2>
      <h2>Bar Chart</h2>
      <div className="chart-wrapper">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
