"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/ui/FormField";
import AuthLayout from "@/components/layouts/authLayout";
import { postData } from "@/utils/fetchData";
import Cookies from "js-cookie";
import { ToasterContext } from "@/context/ToasterContext";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setToken } from "@/redux/auth/authSlice";

export default function SigninPage() {
  const { setToaster } = useContext(ToasterContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postData(
        `${process.env.NEXT_PUBLIC_API}/auth/signin`,
        form
      );

      if (response?.data) {
        console.log("response", response);
        router.push("/");
        setLoading(false);
        Cookies.set("token", response?.data?.token);
        dispatch(setToken(response?.data?.token));
        dispatch(setFirstName(response?.data?.firstName));
        dispatch(setLastName(response?.data?.lastName));

        setToaster({
          variant: "success",
          message: "Login Success",
        });
      }
    } catch (error: any) {
      setToaster({
        variant: "danger",
        message: error?.response?.data?.msg ?? "Internal Server Error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AuthLayout
        onSubmit={handleSubmit}
        loading={loading}
        textButton="Masuk"
        textLink="Daftar"
        textForm="Belum punya akun?,"
        textTitle="Sign In"
      >
        <FormInput
          value={form.email}
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        <FormInput
          value={form.password}
          label="Password"
          name="password"
          type="password"
          placeholder="***********"
          onChange={handleChange}
        />
      </AuthLayout>
    </div>
  );
}
