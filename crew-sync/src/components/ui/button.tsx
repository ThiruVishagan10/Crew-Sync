import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full px-4 py-2 font-medium rounded-lg transition",
        variant === "primary" ? "bg-black text-white hover:bg-gray-900" : "bg-gray-200 hover:bg-gray-300",
        className
      )}
      {...props}
    />
  );
};
