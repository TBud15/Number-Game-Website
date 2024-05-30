"use client";

import React, { useState } from "react";

const Statistics: React.FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState(true); //true for dev purposes

  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className="relative text-center">
      <button
        onClick={toggleSideMenu}
        className="items-center bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        {openSideMenu ? "Close" : "Open"} Statistics
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          openSideMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            Your Game Statistics
          </h2>
          <div className="space-y-4 text-blue-500">
            <div className="flex justify-between">
              <span>Total Sum Games:</span>
              <span>25</span>
            </div>
            <div className="flex justify-between">
              <span>Correct answers:</span>
              <span>15</span>
            </div>
            <div className="flex justify-between">
              <span>Last visited</span>
              <span>March 15</span>
            </div>
            <div className="flex justify-between">
              <span>Incorrect Answers:</span>
              <span>10</span>
            </div>
            <div className="flex justify-between">
              {/* Can do it locally */}
              <span>Win Rate:</span>
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
