import { Suspense } from 'react';
import './App.css';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';

import Navbar from './Components/Navbar/Navbar';
import Vector1 from './assets/vector1.png';
import TaskStatus from './Components/TaskStatus/TaskStatus';
import ResolovedTask from './Components/ResolvedTask/ResolovedTask';

function App() {


const fetchtickets = async () => {
  const res = await fetch('/Data.json');
  return res.json();
};

const ticketsPromise = fetchtickets();
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-6 px-4 py-10">
          {/* Card 1 */}
          <div className="relative w-full h-[160px] sm:h-[180px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl flex flex-col items-center justify-center overflow-hidden">
            {/* Left Pattern */}
            <img
              src={Vector1}
              className="absolute left-0 top-0 h-full w-auto object-cover"
              alt="pattern-left"
            />

            {/* Right Pattern */}
            <img
              src={Vector1}
              className="absolute right-0 top-0 h-full w-auto object-cover scale-x-[-1]"
              alt="pattern-right"
            />

            {/* Content */}
            <div className="relative z-10 text-center text-white">
              <h3 className="text-base sm:text-xl font-medium opacity-90">
                In-Progress
              </h3>
              <p className="text-3xl sm:text-6xl font-bold mt-2">0</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full h-[160px] sm:h-[180px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl flex flex-col items-center justify-center overflow-hidden">
            {/* Left Pattern */}
            <img
              src={Vector1}
              className="absolute left-0 top-0 h-full w-auto object-cover"
              alt="pattern-left"
            />

            {/* Right Pattern */}
            <img
              src={Vector1}
              className="absolute right-0 top-0 h-full w-auto object-cover scale-x-[-1]"
              alt="pattern-right"
            />

            {/* Content */}
            <div className="relative z-10 text-center text-white">
              <h3 className="text-base sm:text-xl font-medium opacity-90">
                Resolved
              </h3>
              <p className="text-3xl sm:text-6xl font-bold mt-2">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Suspense>
            <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
          </Suspense>
        </div>
        <div className="bg-[#f3f4f6]">
          <Suspense>
            <h2 className="text-md font-bold mb-2 mt-4 text-[#2d3748]">
              Task Status
            </h2>
            <TaskStatus></TaskStatus>
          </Suspense>
          <Suspense>
            <h2 className="text-md font-bold mb-2 mt-4 text-[#2d3748]">
              Resolve Task
            </h2>
            <ResolovedTask></ResolovedTask>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App; 
