import React from 'react';

const ResolovedTask = () => {
  return (
    <div className="w-full">
      <div className="space-y-4  ">
        {/* Task Card 1 */}
        <div className=" p-5 rounded-xl shadow-sm border border-gray-200 bg-green-100">
          <h4 className="font-bold text-sm mb-4 text-[#2d3748]">
            Payment Failed - Card Declined
          </h4>
          <button className="text-green-500 font-bold">✅Completed</button>
        </div>
      </div>
    </div>
  );
};

export default ResolovedTask;