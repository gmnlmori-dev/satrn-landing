import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-sm font-medium transition-[box-shadow,transform,background-color,color,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.99]";
  const variants = {
    primary:
      "bg-slate-900 text-white shadow-sm shadow-slate-900/10 hover:bg-slate-800 hover:shadow-md hover:shadow-slate-900/15",
    secondary:
      "border border-slate-200/90 bg-white text-slate-800 shadow-sm shadow-slate-900/[0.04] hover:border-slate-300 hover:bg-slate-50",
  };
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
