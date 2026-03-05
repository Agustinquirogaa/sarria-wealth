import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-body font-medium transition-all duration-150 rounded-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2",
    {
      // Sizes
      "px-4 py-2 text-sm": size === "sm",
      "px-5 py-2.5 text-base": size === "md",
      "px-7 py-3.5 text-base": size === "lg",
      // Variants
      "bg-brand-accent text-white hover:bg-brand-accent-light active:scale-[0.98]":
        variant === "primary",
      "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white":
        variant === "outline",
      "text-brand-accent hover:text-brand-accent-light underline underline-offset-4":
        variant === "ghost",
      // Disabled
      "opacity-50 pointer-events-none": disabled,
    },
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
}
