import React from "react";
interface CustInputProp {
  label: string;
  placeholder: string;
  type: string;
}
export const CustInput = ({ label, placeholder, type }:CustInputProp) => {
  return (
    <div className="text-black flex flex-col gap-2 min-w-[70%] text-left">
      <label className="text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded p-2 w-full border border-primary outline-none" 
      />
    </div>
  );
};
