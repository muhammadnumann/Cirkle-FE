import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const data = () => {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          aspectRatio: 6 / 1,
          label: 'First dataset',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
          fill: 'start',
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(0, 99, 218, 1)');
            gradient.addColorStop(1, 'rgba(0, 99, 218, 0');
            return gradient;
          },
          borderColor: '#468CE0',
          pointRadius: 5,
          pointBackgroundColor: '#0063DA',
          lineTension: 0.6,
        },
      ],
    };
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
    aspectRatio: 6 / 1,
    legend: { display: false },
    responsive: true,
    scales: {
      y: {
        grid: {
          display: false,
        },
        tickLength: 5,
        ticks: {
          stepSize: 200,
        },
      },
      x: {
        grid: {
          display: true,
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

  return (
    <div>
      <Line data={data()} options={options} className="w-100" />
    </div>
  );
}
