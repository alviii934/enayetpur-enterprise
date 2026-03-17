import React from 'react';

const TaskStatus = () => {
  return (
    <div className="w-full">
  

      <div className="space-y-4">
        {/* Task Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h4 className="font-bold text-sm mb-4 text-[#2d3748]">
            Payment Failed - Card Declined
          </h4>
          <button className="w-full bg-[#00ac47] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
