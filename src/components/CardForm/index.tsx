import { useAppDispatch } from '../../App/hooks';
import { ICard } from '../../interface/ICard';
import { TextField } from '../TextField';
import { Form } from './styled';

import {
  handleCVCDataChange,
  handleCardNumberDataChange,
  handleCardholderDataChange,
  handleExpDateDataChange,
} from '../../App/cardSlice';
import { useState } from 'react';
import { Button } from '../Button';

interface Props {
  card: ICard;
}

export const CardForm = ({ card }: Props) => {
  const dispatcher = useAppDispatch();
  const [cardholderNameErrorMessage, setCardholderNameErrorMessage] = useState('');
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');
  const [expDateErrorMessage, setExpDateErrorMessage] = useState('');
  const [CVCErrorMessage, setCVCErrorMessage] = useState('');

  return (
    <Form>
      <TextField
        className='full-row'
        label='CARDHOLDER NAME'
        placeholder='e.g. Jane Appleseed'
        errorMessage={cardholderNameErrorMessage}
        onValueChange={(value) => dispatcher(handleCardholderDataChange(value))}
        showError={false}
        value={card.cardholderName}
      />
      <TextField
        className='full-row'
        label='CARD NUMBER'
        placeholder='e.g. 1234 5678 9123 0000'
        errorMessage={cardNumberErrorMessage}
        onValueChange={(value) => dispatcher(handleCardNumberDataChange(value))}
        showError={false}
        value={card.cardNumber}
      />
      <TextField
        label='EXP. DATE (MM/YY)'
        placeholder='MM/YY'
        errorMessage={expDateErrorMessage}
        onValueChange={(value) => dispatcher(handleExpDateDataChange(value))}
        showError={false}
        value={card.expDate}
      />
      <TextField
        label='CVC'
        placeholder='e.g. 123'
        errorMessage={CVCErrorMessage}
        onValueChange={(value) => dispatcher(handleCVCDataChange(value))}
        showError={false}
        value={card.cvc}
      />
      <Button className='full-row' label='Confirm' />
    </Form>
  );
};
