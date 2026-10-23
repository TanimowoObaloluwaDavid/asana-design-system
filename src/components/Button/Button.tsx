import React from "react";

export type ButtonVariant = "primary" | "ghost" | "icon" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Optional left icon element */
  leftIcon?: React.ReactNode;
  /** Optional right icon element */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-xs min-h-[36px]",
  md: "px-3 py-2 text-sm min-h-[44px]",
  lg: "px-6 py-3 text-base min-h-[48px]",
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary shadow-card hover:bg-[#5a646d] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
  ghost:
    "bg-transparent text-text-muted hover:bg-border disabled:opacity-50 disabled:pointer-events-none",
  icon:
    "w-11 h-11 px-0 bg-transparent text-text-muted rounded-md hover:bg-border disabled:opacity-50 disabled:pointer-events-none",
  outline:
    "bg-transparent text-text-muted border border-border hover:bg-border disabled:opacity-50 disabled:pointer-events-none",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", loading = false, leftIcon, rightIcon, className, children, disabled, ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={[
          "asana-btn inline-flex items-center justify-center gap-2 rounded-lg font-sans transition-all duration-base ease-in-out cursor-pointer touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed",
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
