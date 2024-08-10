import axios from "axios";

export const fetchUserInfo = async (id: string ) => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/userInfo`, {
    params: {
      userId: id,
    },
  });
  return data.data;
};
