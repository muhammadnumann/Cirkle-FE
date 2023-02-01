import React from 'react';
import { Chart as ChartJS, CategoryScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(CategoryScale, Title, Tooltip, Legend, ArcElement);

export const options = {
  circumference: 280,
  rotation: -145,
  legend: { display: false },
  responsive: true,
  cutout: '70%',
  elements: {
    arc: {
      offset: 60,
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
const chartData = 78;
const total = 100 - chartData;
const datalist = Array.from({ length: chartData / 2 }, () => 2);

const bgcolor = datalist.map((v, i) => {
  return `rgba(105, 108, 255, ${((v * i) / 100) * 1.26})`;
});

export const data = {
  datasets: [
    {
      data: [...datalist, total],
      backgroundColor: [...bgcolor, 'transparent'],
      borderWidth: 0,
    },
  ],
};

export default function Dounught() {
  return <Doughnut options={options} data={data} />;
}
