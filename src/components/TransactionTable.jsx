import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/transactions')
            .then((response) => setTransactions(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Transaction Overview</h2>
            <table className="table-auto w-full bg-white shadow-lg rounded-lg border-collapse border border-gray-200">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                            <td className="border border-gray-300 px-4 py-2">{transaction.description}</td>
                            <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                            <img
    src={
        transaction.category.toLowerCase() === 'income'
            ? 'https://cdn-icons-png.flaticon.com/512/1907/1907937.png' // Income icon
            : 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' // Expense icon
    }
    alt={transaction.category}
    className="w-5 h-5"
/>

                                {transaction.category}
                            </td>
                            <td className={`border border-gray-300 px-4 py-2 text-right ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {transaction.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionTable;
