import React from 'react';

const Navbar = () => {
  return (
    <div className="shadow-sm w-full ">
      <div className="max-w-11/12 mx-auto py-3 px-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 ">
        <div className="text-xl font-bold">CS — Ticket System</div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-medium ">
          <div className="cursor-pointer hover:text-blue-500">Home</div>
          <div className="cursor-pointer hover:text-blue-500">FAQ</div>
          <div className="cursor-pointer hover:text-blue-500">Changelog</div>
          <div className="cursor-pointer hover:text-blue-500">Blog</div>
          <div className="cursor-pointer hover:text-blue-500">Download</div>
          <div className="cursor-pointer hover:text-blue-500">Contact</div>

          <button className="h-10 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
