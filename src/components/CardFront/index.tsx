import CardFrontImage from '../../images/bg-card-front.png';
import CardLogo from '../../images/card-logo.svg';

import { Container, InfoArea, CardNumber, FlexBox } from './styles';

interface CardProps {
  cardholderName: string;
  cardNumber: string;
  expDate: Date;
  cvc: number;
}

export const CardFront = ({ cardNumber, cardholderName, expDate }: CardProps) => {
  const cardNumberFormater = (_cardName: string) =>
    _cardName.split('').reduce((previous, current, index) => {
      previous += current;
      if (index % 4 === 0) {
        previous += ' ';
      }
      return previous;
    });

  const formatedCardNumber = cardNumberFormater(cardNumber);

  return (
    <Container src={CardFrontImage}>
      <img src={CardLogo} alt='Card Logo' />
      <InfoArea>
        <CardNumber>{formatedCardNumber}</CardNumber>
        <FlexBox>
          <p>{cardholderName}</p>
          <p>{expDate.toLocaleDateString('pt-br', { month: '2-digit', year: '2-digit' })}</p>
        </FlexBox>
      </InfoArea>
    </Container>
  );
};
