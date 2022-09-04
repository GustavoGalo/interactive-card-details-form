import React from 'react';
import { CardBack } from './components/CardBack';
import { CardFront } from './components/CardFront';

import { FlexContainer, Box } from './styles';

function App() {
  return (
    <FlexContainer>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <Box style={{}}>
          <CardFront
            cardNumber='500050005000505A'
            cardholderName='Gustavo Galo'
            cvc={123}
            expDate={new Date()}
          />
        </Box>
        <Box style={{ marginLeft: '5rem' }}>
          <CardBack cvc='500'></CardBack>
        </Box>
      </Box>
      <Box>
        <h1>Box2</h1>
      </Box>
    </FlexContainer>
  );
}

export default App;
