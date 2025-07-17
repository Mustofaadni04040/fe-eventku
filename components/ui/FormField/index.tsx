import React from "react";
import Input from "../Input/index";

interface PropTypes {
  value: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  value,
  name,
  label,
  type,
  placeholder,
  onChange,
}: PropTypes) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`text-sm ${type === "date" ? "w-fit" : ""}`}
      />
    </div>
  );
}
