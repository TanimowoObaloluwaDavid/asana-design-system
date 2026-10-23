import React from 'react';

export function Input({ label, helper, id, className = '', ...props }) {
  return (
    <div className="asana-field">
      {label && <label className="asana-label" htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={[
          'asana-input w-full appearance-none bg-background border border-border rounded-md text-body px-3 py-2 min-h-[44px] placeholder:text-text-muted/45 focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/15 disabled:bg-border disabled:text-text-muted/40 disabled:cursor-not-allowed',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
      {helper && <span className="asana-helper">{helper}</span>}
    </div>
  );
}

export default Input;
