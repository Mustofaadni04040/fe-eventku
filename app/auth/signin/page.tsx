"use client";

import React, { useContext, useState } from "react";
import { ToasterContext } from "@/context/ToasterContext";
import { useRouter } from "next/navigation";
import FormInput from "@/components/ui/FormField";
// import { useDispatch } from "react-redux";
// import {
//   setEmail,
//   setRefreshToken,
//   setRole,
//   setToken,
// } from "@/redux/auth/authSlice";
import { setAuth } from "@/utils/authStorage";
import AuthLayout from "@/components/layouts/authLayout";
import { postData } from "@/utils/fetchData";
import Link from "next/link";

export default function SigninPage() {
  const [error, setError] = useState<string>("");
  const { setToaster } = useContext(ToasterContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  //   const dispatch = useDispatch();

  async function onSubmit() {
    setLoading(true);
    const response = await postData("/cms/auth/signin", {
      //   email: values.email,
      //   password: values.password,
    });

    if (response?.status === 200) {
      router.push("/");
      setLoading(false);
      setAuth({
        token: response?.data?.data?.token,
        refreshToken: response?.data?.data?.refreshToken,
        email: response?.data?.data?.email,
        role: response?.data?.data?.role,
      });

      //   dispatch(setEmail(response?.data?.data?.email));
      //   dispatch(setRefreshToken(response?.data?.data?.refreshToken));
      //   dispatch(setToken(response?.data?.data?.token));
      //   dispatch(setRole(response?.data?.data?.role));

      setToaster({
        variant: "success",
        message: "Login Success",
      });
    } else {
      console.log("error", error);
      //   setError(response?.response?.data?.msg ?? "Internal Server Error");
      setToaster({
        variant: "danger",
        // message: response?.response?.data?.msg ?? "Internal Server Error",
      });
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AuthLayout
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        textButton="Masuk"
        textLink="Daftar"
        textForm="Belum punya akun?,"
        textTitle="Sign In"
      >
        <FormInput
          value=""
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={() => {}}
        />
        <FormInput
          value=""
          label="Password"
          name="password"
          type="password"
          placeholder="***********"
          onChange={() => {}}
        />
      </AuthLayout>
    </div>
  );
}
