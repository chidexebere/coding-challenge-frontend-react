import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  /** callback function passed to the onClick handler*/
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** checks if button is enabled or disabled */
  isDisabled?: boolean;
  /** standard children prop: accepts any valid React Node */
  children?: React.ReactNode;
  /** type of button*/
  variant?: string;
}

const Button = ({
  handleClick,
  isDisabled,
  children,
  variant,
}: ButtonProps): JSX.Element => {
  const computedClass = variant ? `button ${variant}` : `button`;
  return (
    <button
      disabled={isDisabled}
      className={computedClass}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
