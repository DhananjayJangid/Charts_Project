// src/App.js
import React, { useState } from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import './styles.css';

const App = () => {
  const [timePeriod, setTimePeriod] = useState('1day');

  const handleTimeChange = (period) => {
    setTimePeriod(period);
  };

  const getDataForTimePeriod = (period) => {
    switch (period) {
      case '1day':
        return {
          sales: [1000],
          expenses: [800],
          labels: ['Sales', 'Expenses'],
          lineLabels: ['Today'],
          lineSalesData: [1000],
          lineExpensesData: [800],
          barLabels: ['Sales', 'Expenses'],
          barData: [1000, 800],
        };
      case '1week':
        return {
          sales: [3500],
          expenses: [700],
          labels: ['Sales', 'Expenses'],
          lineLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          lineSalesData: [600, 500, 400, 500, 450, 500, 550],
          lineExpensesData: [100, 70, 50, 80, 60, 90, 100],
          barLabels: ['Sales', 'Expenses'],
          barData: [3500, 700],
        };
      case '1month':
        return {
          sales: [15000],
          expenses: [3000],
          labels: ['Sales', 'Expenses'],
          lineLabels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          lineSalesData: [4000, 4000, 3500, 3500],
          lineExpensesData: [800, 800, 700, 700],
          barLabels: ['Sales', 'Expenses'],
          barData: [15000, 3000],
        };
      default:
        return {
          sales: [500],
          expenses: [200],
          labels: ['Sales', 'Expenses'],
          lineLabels: [],
          lineSalesData: [],
          lineExpensesData: [],
          barLabels: ['Sales', 'Expenses'],
          barData: [0, 0],
        };
    }
  };

  const data = getDataForTimePeriod(timePeriod);

  return (
    <div>
      <h1>Sales and Expenses Charts</h1>
      <div className="button-group">
        <button onClick={() => handleTimeChange('1day')}>1 Day</button>
        <button onClick={() => handleTimeChange('1week')}>1 Week</button>
        <button onClick={() => handleTimeChange('1month')}>1 Month</button>
      </div>
      <PieChart sales={data.sales} expenses={data.expenses} labels={data.labels} />
      <LineChart
        labels={data.lineLabels}
        salesData={data.lineSalesData}
        expensesData={data.lineExpensesData}
      />
      <BarChart labels={data.barLabels} data={data.barData} />
    </div>
  );
};

export default App;
