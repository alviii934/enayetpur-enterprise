import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer">Download Apps</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Join Us</li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-[10px] font-bold">
                X
              </span>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-[10px] font-bold">
                in
              </span>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-[10px] font-bold">
                f
              </span>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
              <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-[10px] font-bold">
                ✉
              </span>
              support@cst.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center mt-8 text-sm text-gray-500 w-full">
        <p className="italic">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
