import React, { HTMLAttributes, useState } from 'react';
import { Input, Label, Wrapper, ErrorLabel } from './styles';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  showError: boolean;
  errorMessage: string;
  value: string;
  onValueChange: (data: string) => void;
}

export const TextField = ({
  label,
  placeholder,
  showError,
  errorMessage,
  value,
  onValueChange,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);

  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Input
        showError={showError}
        type='text'
        placeholder={placeholder}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {showError && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </Wrapper>
  );
};
