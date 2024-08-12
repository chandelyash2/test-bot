"use client";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [userCtx, setUserCtx] = useState();

  return (
    <CMSModal.Provider
      value={{
        userCtx,
        setUserCtx,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};
