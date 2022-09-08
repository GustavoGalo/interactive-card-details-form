import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  flex-direction: column;
  gap: 2.5rem;
  height: 530px;
  width: 540px;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    gap: 0;
    height: 248px;
    width: auto;
    font-size: 0.8rem;
  }
`;

const Container = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;

  height: 245px;
  width: 447px;

  padding: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    width: 287px;
    height: 158px;
    padding: 1rem;
  }
`;

export const CardFront = styled(Container)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    top: 90px;
    left: 0;
  }
`;

export const CardBack = styled(Container)`
  position: absolute;
  top: 283px;
  left: 93px;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    top: 0;
    left: 56px;
  }
`;

export const CardBottom = styled.div`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 1.5rem;
  width: calc(100% - 3rem);

  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    bottom: 1rem;
    width: calc(100% - 2rem);
  }
`;

export const CardholderLabel = styled.p`
  letter-spacing: 0.0625rem;
  font-size: 0.9rem;
  font-weight: 500;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardNumberLabel = styled.p`
  position: absolute;
  bottom: 4.5rem;

  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 1.95rem;
  letter-spacing: 0.125rem;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    font-size: 1.2rem;
    bottom: 3rem;
  }
`;

export const Image = styled.img`
  height: 3rem;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    height: 2rem;
  }
`;

export const ExpDateLabel = styled.p`
  letter-spacing: 0.0625rem;
  font-weight: 500;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CVCLabel = styled.p`
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 0.0625rem;
  font-weight: 500;

  position: absolute;

  right: 3.5rem;
  top: 6.7rem;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    right: 2rem;
    top: 4.3rem;
  }
`;
