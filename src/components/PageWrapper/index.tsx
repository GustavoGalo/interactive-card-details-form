import { ReactNode } from 'react';

import { Background } from './styles';
import bgDesktop from '../../images/bg-main-desktop.png';
import bgMobile from '../../images/bg-main-mobile.png';

interface Props {
  children?: ReactNode;
}

export const PageWrapper = ({ children }: Props) => (
  <Background src={bgDesktop} mobileSrc={bgMobile}>
    {children}
  </Background>
);
