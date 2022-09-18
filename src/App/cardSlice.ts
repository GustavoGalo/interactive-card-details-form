import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardNumber: '',
  cardholderName: '',
  cvc: '',
  expDate: new Date().toLocaleDateString('pt-br', { month: '2-digit', year: '2-digit' }),
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    handleCardholderDataChange: (state, action) => {
      state.cardholderName = action.payload;
    },
    handleCardNumberDataChange: (state, action) => {
      state.cardNumber = action.payload;
    },
    handleCVCDataChange: (state, action) => {
      state.cvc = action.payload;
    },
    handleExpDateDataChange: (state, action) => {
      state.expDate = action.payload;
    },
  },
});

export const {
  handleCardholderDataChange,
  handleCVCDataChange,
  handleExpDateDataChange,
  handleCardNumberDataChange,
} = cardSlice.actions;

export default cardSlice.reducer;
