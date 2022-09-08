import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 125px;
  grid-template-columns: 540px 385px;

  place-content: center;
  height: 100vh;

  padding: 1rem;
  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: calc(345px + 2rem);
    gap: 1rem;
    height: auto;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.5rem;
  margin: auto;
`;
