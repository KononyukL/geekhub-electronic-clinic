import { createAsyncThunk } from '@reduxjs/toolkit';
import { visitsApi } from 'api';
import { IDeleteVisit, IVisitFilter } from 'api/visits/types';
import { toast } from 'react-toastify';

export const getFinishedVisits = createAsyncThunk(
  'finished-visits',
  async (filter: IVisitFilter, { rejectWithValue }) => {
    try {
      return await visitsApi.getFinishedVisits(filter);
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const getPlannedVisits = createAsyncThunk(
  'planned-visits',
  async (filter: IVisitFilter, { rejectWithValue }) => {
    try {
      return await visitsApi.getPlannedVisits(filter);
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const deleteVisits = createAsyncThunk(
  'delete-visits',
  async ({ date, time }: IDeleteVisit, { rejectWithValue }) => {
    try {
      const data = await visitsApi.deleteVisit({ date, time });
      toast.success('Запис скасовано');

      return data;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
