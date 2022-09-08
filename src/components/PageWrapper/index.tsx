import { ReactNode } from 'react';

import bgDesktop from '../../images/bg-main-desktop.png';
import bgMobile from '../../images/bg-main-mobile.png';

import { Background, CenteredContainer, Container } from './styles';

interface Props {
  children?: ReactNode;
}

export const PageWrapper = ({ children }: Props) => (
  <Container>
    <Background src={bgDesktop} mobileSrc={bgMobile}>
      <CenteredContainer>{children}</CenteredContainer>
    </Background>
  </Container>
);
