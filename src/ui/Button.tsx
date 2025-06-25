import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  className,
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        "font-bold rounded-lg py-2.5 px-5 min-w-48 text-lg transition-all duration-300",
        disabled
          ? "bg-gray-400 cursor-not-allowed!"
          : "bg-rose-500 hover:bg-rose-600",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
