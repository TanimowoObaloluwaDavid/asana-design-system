import React from 'react';

const sizes = {
  sm: 'px-2 py-1 text-sm min-h-[36px]',
  md: 'px-3 py-2 min-h-[44px]',
  lg: 'px-6 py-3 text-base min-h-[48px]',
};

const variants = {
  primary: 'bg-primary text-on-primary shadow-card hover:bg-[#5a646d]',
  ghost: 'bg-transparent text-text-muted hover:bg-border',
  icon: 'w-11 h-11 px-0 bg-transparent text-text-muted hover:bg-border',
};

export function Button({ children, variant = 'primary', size = 'md', disabled, className = '', onClick, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'asana-btn inline-flex items-center justify-center gap-2 rounded-lg font-sans text-body transition-all duration-base ease-in-out cursor-pointer touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { type: 'button' };

export default Button;
