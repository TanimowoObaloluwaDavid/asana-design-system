import React from "react";

export type CardVariant = "default" | "raised";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant — default uses white background, raised uses surface color */
  variant?: CardVariant;
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={[
        "asana-card flex flex-col border border-border rounded-md p-6 shadow-card transition-all duration-base ease-in-out",
        variant === "raised"
          ? "bg-surface shadow-elevated"
          : "bg-background",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
export default Card;
