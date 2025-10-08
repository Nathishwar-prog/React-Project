import React, { useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';

// The main application component. In a single-file React app, this is typically where all logic resides.
const App = () => {
  // 1. State hook to manage the counter value. Initial state is 0.
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter, ensuring it never goes below 0.
  const handleDecrement = () => {
    // Logic to ensure the count is not less than 0
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  // Function to reset the counter to 0
  const handleReset = () => {
    setCount(0);
  };

  // Define a reusable Button component for cleaner JSX
  const CounterButton = ({ onClick, children, disabled = false, bgColor = 'bg-indigo-600', icon: Icon, label }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`
        flex items-center justify-center p-4 m-2 text-white font-semibold 
        rounded-xl shadow-lg transition duration-200 ease-in-out transform 
        hover:scale-[1.03] focus:outline-none focus:ring-4
        ${bgColor} 
        ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : 'hover:shadow-xl focus:ring-indigo-300 active:bg-indigo-700'}
        sm:w-32 w-full
      `}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-inter">
      
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 sm:text-5xl text-center">
        Assignment-2 Counter Application
      </h1>

      {/* Counter Container Card */}
      <div 
        className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-4xl 
                   flex flex-col lg:flex-row items-center justify-center gap-10"
      >
        
        {/* Component 1: Counter Display */}
        <div className="flex-1 w-full lg:w-auto text-center p-6 border-4 border-indigo-600 rounded-2xl shadow-inner bg-indigo-50/50">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Current Count Value</h2>
          <p 
            className="text-8xl sm:text-9xl font-mono font-bold transition-all duration-300 ease-out"
            style={{ color: count === 0 ? '#ef4444' : '#4f46e5' }} // Red when 0, Indigo otherwise
          >
            {count}
          </p>
          {count === 0 && (
              <p className="mt-4 text-sm font-semibold text-red-500">
                  Cannot decrement below zero.
              </p>
          )}
        </div>

        {/* Component 2: Controls (in a column that appears next to the display in a row on large screens) */}
        <div className="flex-1 w-full lg:w-auto flex flex-col items-start justify-start me-4 space-y-4">
          
          <h2 className="text-xl font-medium text-gray-600 mb-2">Controls</h2>
          
          {/* Action Buttons (arranged in a flexible row/column setup) */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-start p-5">
            <CounterButton 
              onClick={handleIncrement} 
              icon={Plus} 
              label="Increase Count"
            >
              Increment
            </CounterButton>
            
            <CounterButton 
              onClick={handleDecrement}
              disabled={count === 0} // Disable if count is 0
              bgColor={count === 0 ? 'bg-gray-400' : 'bg-red-500'}
              icon={Minus}
              label="Decrease Count"
            >
              Decrement
            </CounterButton>
          </div>
          
          {/* Reset Button */}
          <CounterButton 
            onClick={handleReset} 
            bgColor="bg-gray-500"
            icon={RotateCcw}
            label="Reset Count"
          >
            Reset
          </CounterButton>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-400">
        Assignment 1
      </p>

    </div>
  );
};

export default App;
