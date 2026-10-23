import React from 'react';

export function Card({ children, raised = false, className = '', ...props }) {
  return (
    <div
      className={[
        'asana-card flex flex-col border border-border rounded-md p-6 shadow-card transition-all duration-base ease-in-out',
        raised ? 'asana-card--raised bg-surface shadow-elevated' : 'bg-background',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
