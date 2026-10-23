import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Accessible label for the input */
  label?: string;
  /** Helper text shown below the input */
  helper?: string;
  /** Additional CSS classes */
  className?: string;
  /** HTML id for the input (auto-generated if omitted) */
  id?: string;
}

let inputIdCounter = 0;

export const Input: React.FC<InputProps> = ({
  label,
  helper,
  id: idProp,
  className,
  ...props
}) => {
  const id = idProp || `asana-input-${++inputIdCounter}`;

  return (
    <div className="asana-field flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="asana-label text-xs font-medium text-text-muted tracking-tight"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          "asana-input w-full appearance-none bg-background border border-border rounded-md text-body px-3 py-2 min-h-[44px]",
          "placeholder:text-text-muted/45",
          "focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15",
          "disabled:bg-border disabled:text-text-muted/40 disabled:cursor-not-allowed",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {helper && (
        <span className="asana-helper text-xs text-text-muted/60">{helper}</span>
      )}
    </div>
  );
};

Input.displayName = "Input";
export default Input;
