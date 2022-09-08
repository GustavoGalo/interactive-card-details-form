import styled from 'styled-components';

interface IBackgroundProps {
  src: string;
  mobileSrc: string;
}

export const Container = styled.main`
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div<IBackgroundProps>`
  width: 33%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${(props) => props.theme.breakingPoints.smallDesktop}px) {
    background-image: url(${(props) => props.mobileSrc});
    width: 100%;
    height: 240px;
  }
`;

export const CenteredContainer = styled.div`
  position: absolute;
  offset: 0;
  width: 100%;
`;
