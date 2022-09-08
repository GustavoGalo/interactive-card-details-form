import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.5rem;
  margin: auto;

  .full-row {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
