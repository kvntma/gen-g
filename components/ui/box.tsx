import React from 'react';

interface BoxProps {
  className?: string;
  children?: React.ReactNode;
}

const Box = ({ className = '', children, ...props }: BoxProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Box;
