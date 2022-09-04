import styled from 'styled-components';

interface IBackgroundProps {
  src: string;
  mobileSrc: string;
}

export const Background = styled.div<IBackgroundProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
