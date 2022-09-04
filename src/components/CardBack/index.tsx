import CardBackImage from '../../images/bg-card-back.png';
import { Container } from '../CardFront/styles';

import { CVCLabel } from './styles';

interface Props {
  cvc: string;
}

export const CardBack = ({ cvc }: Props) => (
  <Container src={CardBackImage} style={{ position: 'relative' }}>
    <CVCLabel>{cvc}</CVCLabel>
  </Container>
);
