import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  prefetch?: boolean;
}

/**
 * Next.js-compatible Link Component
 * Works seamlessly in both Next.js App/Pages Router and SPA/Vite environments.
 */
export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  onClick,
  prefetch,
  ...props
}) => {
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
