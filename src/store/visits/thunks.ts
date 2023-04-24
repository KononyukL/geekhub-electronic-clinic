import { createAsyncThunk } from '@reduxjs/toolkit';
import { visitsApi } from 'api';
import { IVisitFilter } from 'api/visits/types';
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

export const getUnconfirmedVisits = createAsyncThunk(
  'unconfirmed-visits',
  async (filter: IVisitFilter, { rejectWithValue }) => {
    try {
      return await visitsApi.getUnconfirmedVisits(filter);
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const getPatientFinishedVisits = createAsyncThunk(
  'patient-finished-visits',
  async (id: string | number, { rejectWithValue }) => {
    try {
      return await visitsApi.getPatientFinishedVisit(id);
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const deleteVisits = createAsyncThunk(
  'delete-visits',
  async (id: string | number, { rejectWithValue }) => {
    try {
      await visitsApi.deleteVisit(id);
      toast.success('Запис скасовано');
      return true;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
export const confirmVisits = createAsyncThunk(
  'confirm-visits',
  async (id: string | number, { rejectWithValue }) => {
    try {
      await visitsApi.confirmVisit(id);
      toast.success('Запис підтверджено');
      return true;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
