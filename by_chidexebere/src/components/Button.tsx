import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  /** callback function passed to the onClick handler*/
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** checks if button is enabled or disabled */
  isDisabled?: boolean;
  /** standard children prop: accepts any valid React Node */
  children?: React.ReactNode;
}

const Button = ({
  handleClick,
  isDisabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button disabled={isDisabled} className="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
