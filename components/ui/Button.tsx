import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-tight transition-transform duration-200 will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue-hover)] active:scale-[0.99]",
  ghost:
    "border border-[var(--border-subtle)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--glass-bg)] active:scale-[0.99]",
  outline:
    "border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] active:scale-[0.99]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonButtonProps = {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

export function Button(props: ButtonLinkProps | ButtonButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if (props.href) {
    return (
      <Link href={props.href} className={cls} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, ...rest } = props as ButtonButtonProps;
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
