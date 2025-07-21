"use client";

import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setToken } from "@/redux/auth/authSlice";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");

      if (token) {
        dispatch(setToken(token));
      }
    }
  }, [dispatch]);

  return children;
};

export default AuthProvider;
