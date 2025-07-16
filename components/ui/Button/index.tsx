import React from "react";

type PropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit" | "reset" | undefined;
  classname: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean | undefined;
  loading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, PropTypes>(
  ({ onClick, children, disabled, loading, type, classname }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={classname}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
