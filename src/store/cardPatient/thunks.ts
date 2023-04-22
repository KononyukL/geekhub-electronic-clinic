import { createAsyncThunk } from '@reduxjs/toolkit';
import { cardPatientApi } from 'api';

export const getCard = createAsyncThunk(
  'card-patient',
  async (cardId: string | number, { rejectWithValue }) => {
    try {
      return await cardPatientApi.getCardPatient(cardId);
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
