import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    y: {
      display: false,
      stacked: true,
    },
    x: {
      stacked: true,
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [''];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#696CFF',
      borderWidth: 0,
      borderRadius: 5,
    },
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#f5f5f9',
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};

export function BarCart() {
  return <Bar options={options} data={data} className="Barchart" />;
}
