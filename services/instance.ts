import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const Instance = () => {
  const baseURL = process.env.BACKEND_API;

  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session) {
      config.headers.Authorization = "Bearer " + session?.user.access;
    }

    return config;
  });

  let response = instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let error_status = error.response.status;
      if (error_status == 401) {
        signOut({ redirect: false });
      }
    },
  );

  return instance;
};

export const instance = Instance();
