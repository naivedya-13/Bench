import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeExpenseChart = ({ chartData = { income: 0, expense: 0 } }) => {
    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Amount',
                data: [chartData.income, chartData.expense],
                backgroundColor: ['#4caf50', '#f44336'],
                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Income vs Expense Summary',
                color: '#333',
                font: {
                    size: 18,
                    weight: 'bold',
                },
            },
        },
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Income and Expense</h3>
            <Bar data={data} options={options} />
        </div>
    );
};


export default IncomeExpenseChart;
