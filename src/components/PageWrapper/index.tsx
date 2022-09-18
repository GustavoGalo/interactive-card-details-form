import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../../App/store';

import bgDesktop from '../../images/bg-main-desktop.png';
import bgMobile from '../../images/bg-main-mobile.png';
import { GlobalStyles } from '../../styles/global';
import { theme } from '../../styles/theme';

import { Background, CenteredContainer, Container } from './styles';

interface Props {
  children?: ReactNode;
}

export const PageWrapper = ({ children }: Props) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Container>
        <Background src={bgDesktop} mobileSrc={bgMobile}>
          <CenteredContainer>{children}</CenteredContainer>
        </Background>
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  </Provider>
);
