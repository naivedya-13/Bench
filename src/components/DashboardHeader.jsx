import React from 'react';
import image from "../assets/image.png"

const DashboardHeader = () => (
    <div className="text-center mb-8">
        <img
    src={image}
    alt="Bench Logo"
    className="mx-auto w-32 mb-4"
/>

        <h1 className="text-4xl font-bold text-green-800">Bench Financial Overview</h1>
<p className="text-gray-600">Your trusted partner in bookkeeping and accounting</p>

    </div>
);

export default DashboardHeader;
