import {
  CardNumberLabel,
  CardWrapper,
  CardFront,
  CardBack,
  CardBottom,
  CardholderLabel,
  Image,
  ExpDateLabel,
  CVCLabel,
} from './styles';

import CardBackImage from '../../images/bg-card-back.png';
import CardFrontImage from '../../images/bg-card-front.png';
import CardLogo from '../../images/card-logo.svg';
import { ICard } from '../../interface/ICard';

interface Props {
  card: ICard;
}

export const Card = ({ card }: Props) => {
  return (
    <CardWrapper>
      <CardFront src={CardFrontImage}>
        <Image src={CardLogo} alt='Card Logo' />
        <CardNumberLabel>{card.cardNumber}</CardNumberLabel>
        <CardBottom>
          <CardholderLabel>{card.cardholderName.toUpperCase()}</CardholderLabel>
          <ExpDateLabel>{card.expDate}</ExpDateLabel>
        </CardBottom>
      </CardFront>
      <CardBack src={CardBackImage}>
        <CVCLabel>{card.cvc}</CVCLabel>
      </CardBack>
    </CardWrapper>
  );
};
