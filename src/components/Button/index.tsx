import { HTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface Props extends HTMLAttributes<Omit<HTMLButtonElement, 'type'>> {
  label: string;
}

export const Button = ({ label, ...props }: Props) => {
  return (
    <StyledButton {...props} onClick={(e) => e.preventDefault()}>
      {label}
    </StyledButton>
  );
};
