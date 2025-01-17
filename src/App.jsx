import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import ReceiptUpload from './components/ReceiptUpload';
import DashboardHeader from './components/DashboardHeader';
import axios from 'axios';

function App() {
    const [chartData, setChartData] = useState({ income: 0, expense: 0 });

    useEffect(() => {
        axios.get('http://localhost:5000/api/summary')
            .then((response) => setChartData(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-green-50 p-8">
            <DashboardHeader />
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <IncomeExpenseChart chartData={chartData} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <ReceiptUpload />
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                <TransactionTable />
            </div>
        </div>
    );
}

export default App;
