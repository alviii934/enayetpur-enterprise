import React from 'react';

const Tickets = ({ tickets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map(ticket => (
        <div
          key={ticket.id}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-base pr-20">{ticket.title}</h3>
            <span className="absolute top-5 right-5 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {ticket.status}
            </span>
          </div>

          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            {ticket.description}
          </p>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-[11px] font-semibold">
            <div className="flex gap-3 uppercase">
              <span className="text-gray-400">{ticket.id}</span>
              <span>{ticket.priority}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <span>{ticket.customer}</span>
              <span>📅 {ticket.createdAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
