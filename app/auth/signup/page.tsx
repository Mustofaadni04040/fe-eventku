"use client";

import React, { useContext, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FormInput from "@/components/ui/FormField";
import AuthLayout from "@/components/layouts/authLayout";
import { postData, putData } from "@/utils/fetchData";
import Cookies from "js-cookie";
import { ToasterContext } from "@/context/ToasterContext";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setToken } from "@/redux/auth/authSlice";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function SignupPage() {
  const { setToaster } = useContext(ToasterContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params = useSearchParams();
  const keyword = params.has("keyword");
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });
  const [otp, setOtp] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (keyword) {
        const response = await putData(
          `${process.env.NEXT_PUBLIC_API}/active`,
          {
            otp: otp,
            email: form.email,
          }
        );

        if (response?.data) {
          router.push("/auth/signin");
          setToaster({
            variant: "success",
            message: "Berhasil mengaktifkan akun",
          });
        }
      } else {
        const response = await postData(
          `${process.env.NEXT_PUBLIC_API}/auth/signup`,
          form
        );

        if (response?.data) {
          console.log("response", response);
          router.push("/auth/signup?keyword=otp");
          setLoading(false);
          setToaster({
            variant: "success",
            message: "Register Success",
          });
        }
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
        textButton="Daftar"
        textLink="signin"
        textForm="Sudah punya akun?,"
        textTitle="Sign Up"
      >
        {keyword ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-[#00466a]">OTP</p>
            <InputOTP
              maxLength={4}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ) : (
          <>
            <FormInput
              value={form.firstName}
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First name here"
              onChange={handleChange}
            />
            <FormInput
              value={form.lastName}
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last name here"
              onChange={handleChange}
            />
            <FormInput
              value={form.email}
              label="Email"
              name="email"
              type="email"
              placeholder="Example@gmail.com"
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
            <FormInput
              value={form.role}
              label="Role"
              name="role"
              type="text"
              placeholder="Your role here"
              onChange={handleChange}
            />
          </>
        )}
      </AuthLayout>
    </div>
  );
}
