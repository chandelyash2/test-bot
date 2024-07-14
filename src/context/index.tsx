"use client";

import { User } from "@/components/Quest";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<User>();

  return (
    <CMSModal.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};
