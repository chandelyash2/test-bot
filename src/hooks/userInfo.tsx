// hooks/useUserInfo.ts
"use client";
import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";
import axios from "axios";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  // Add other fields as necessary
}

const fetchUserInfo = async (_id: string): Promise<UserInfo> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
    {
      params: { _id },
    }
  );
  return response.data;
};

export const useUserInfo = (
  _id: string) => {
  return useQuery(["user", _id], () => fetchUserInfo(_id));
};
