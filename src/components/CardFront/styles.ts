import styled from 'styled-components';

export const Container = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;

  height: 245px;
  width: 447px;

  padding: 1.5rem;
`;

export const CardNumber = styled.h1`
  margin-top: 4rem;
  font-weight: 500;

  font-size: 1.85rem;
  letter-spacing: 0.125rem;
`;

export const InfoArea = styled.div`
  color: ${(prosp) => prosp.theme.colors.white};
`;

export const FlexBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
