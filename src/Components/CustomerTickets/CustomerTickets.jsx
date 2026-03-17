import React from 'react';
import { use } from 'react';
import Tickets from './Tickets';

const CustomerDashboard = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  return (
    <div className="bg-[#f3f4f6] p-4 md:p-10 font-sans text-slate-700">
      <h2 className="text-2xl font-bold mb-6 text-[#2d3748]">
        Customer Tickets
      </h2>
      <Tickets tickets={ticketsData}></Tickets>
    </div>
  );
};

export default CustomerDashboard;
