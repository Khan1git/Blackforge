import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "inverse";
type Size = "sm" | "md" | "lg";

export function buttonStyles(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(
    "btn",
    `btn-${variant}`,
    size !== "md" && `btn-${size}`,
    className,
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("arrow h-3.5 w-3.5", className)}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type NativeProps = BaseProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = true,
  ...rest
}: LinkProps) {
  const classes = buttonStyles(variant, size, className);
  const content = (
    <>
      {children}
      {withArrow ? <ArrowIcon /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
  ...rest
}: NativeProps) {
  return (
    <button className={buttonStyles(variant, size, className)} {...rest}>
      {children}
      {withArrow ? <ArrowIcon /> : null}
    </button>
  );
}
