import React from "react";

export const Header = () => {
  return (
    <div className="border-b flex justify-between items-center p-4 z-30">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.1667 5.83331L5.83333 14.1666M14.1667 14.1666L5.83333 5.83331"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h3 className="font-inter font-medium text-lg">Nimbi Quest</h3>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44771 11 10C11 10.5523 10.5523 11 10 11ZM10 16.5C9.44772 16.5 9 16.0523 9 15.5C9 14.9477 9.44772 14.5 10 14.5C10.5523 14.5 11 14.9477 11 15.5C11 16.0523 10.5523 16.5 10 16.5ZM10 5.5C9.44772 5.5 9 5.05228 9 4.5C9 3.94772 9.44772 3.5 10 3.5C10.5523 3.5 11 3.94772 11 4.5C11 5.05228 10.5523 5.5 10 5.5Z"
            fill="#C0C4C6"
            stroke="white"
          />
        </svg>
      </span>
    </div>
  );
};
