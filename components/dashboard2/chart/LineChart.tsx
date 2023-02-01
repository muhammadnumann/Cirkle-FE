import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  element: {
    point: {
      pointBackgroundColor: '#000',
    },
    line: {
      showLine: false,
    },
  },
  legend: { display: false },
  responsive: true,
  // scales: {
  //   y: {
  //     display: false,
  //   },
  //   x: {
  //     grid: {
  //       display: false,
  //       borderWidth: 0,
  //     },
  //     axis: {
  //       display: false,
  //     },
  //   },
  // },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      fill: false,
      lineTension: 0.6,
      borderColor: '#FFAB00',
      backgroundColor: '#FFAB00',
      pointRadius: [0, 0, 0, 0, 0, 5],
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 4,
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} className="w-100" />;
}
