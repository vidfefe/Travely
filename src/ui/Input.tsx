import clsx from "clsx";
import React from "react";

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        "border-2 border-blue-950 text-gray-600 outline-blue-950  transition-all duration-300 focus:shadow-lg rounded-lg p-4",
        className
      )}
    />
  );
};

export default Input;
