import React, { useState } from 'react';

const Salary = () => {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [salary, setSalary] = useState(0);

  const calculateSalary = () => {
    const salary = hoursWorked * hourlyRate;
    setSalary(salary);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Sidebar (left navigation) */}
  

      {/* Main content */}
      <div className="ml-64 w-full">
        {/* Navbar */}
        <div className="text-black py-4 px-8 ml-[30%]">
          <h1 className="text-2xl font-semibold">Salary </h1>
        </div>

        {/* Content */}
        <div className="container mx-auto mt-12 px-4">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
            <div className="mb-4">
              <label htmlFor="hoursWorked" className="block text-sm font-medium text-gray-700">No. of working days</label>
              <input type="number" id="hoursWorked" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">Taxes</label>
              <input type="number" id="hourlyRate" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <button onClick={calculateSalary} className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950">Calculate Salary</button>
              <div>
                <span className="font-semibold">Total Salary:</span> ${salary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
