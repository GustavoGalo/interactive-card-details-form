import styled from 'styled-components';

interface Props {
  showError: boolean;
}

export const Input = styled.input<Props>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.showError ? props.theme.colors.red : props.theme.colors.lightGrayishViolet)};
  border-radius: 0.5rem;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;

  color: ${(props) => props.theme.colors.veryDarkViolet};

  &:focus {
    border: 1px solid
      ${(props) => (props.showError ? props.theme.colors.red : props.theme.linearGradient.to)};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrayishViolet};
  }
`;

export const Label = styled.p`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.0625rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.veryDarkViolet};
`;

export const Wrapper = styled.div``;

export const ErrorLabel = styled.p`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
`;
