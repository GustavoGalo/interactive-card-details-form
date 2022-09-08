import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;

  padding: 1rem 0;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.veryDarkViolet};

  cursor: pointer;
  &:hover {
    filter: grayscale(0.5);
  }
`;
