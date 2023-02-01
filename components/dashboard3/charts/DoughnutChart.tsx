import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const data = {
  labels: [],
  datasets: [
    {
      data: [700, 300],
      backgroundColor: ['#4FD1C5', '#FEB95A '],
      borderWidth: 2,
    },
  ],
};
const options = {
  element: {
    point: {
      pointBackgroundColor: '#000',
    },
    line: {
      showLine: false,
    },
  },
  aspectRatio: 4 / 2,
  legend: { display: false },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        borderWidth: 0,
      },
      axis: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};
export default function DoughnutChart() {
  return <Doughnut data={data} options={options} className="w-100" />;
}
