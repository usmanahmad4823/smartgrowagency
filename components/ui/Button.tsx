import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)] hover:scale-[1.03] active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#2997ff] to-[#30d158] text-white shadow-[0_6px_20px_rgba(41,151,255,0.25)] hover:shadow-[0_8px_24px_rgba(41,151,255,0.45)] border border-white/10 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
  ghost:
    "border border-white/10 bg-white/[0.02] text-[var(--text-primary)] hover:bg-white/[0.08] hover:border-white/20 shadow-sm",
  outline:
    "border border-white/10 bg-transparent text-[var(--text-primary)] hover:border-[#2997ff] hover:text-[#2997ff] hover:bg-[#2997ff]/5 shadow-sm",
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
