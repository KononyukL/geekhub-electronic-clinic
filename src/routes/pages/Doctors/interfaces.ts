import { IDoctor } from '../Doctor/interfaces';
import React from 'react';

export interface IDoctorAndIndex {
  currentDoctor: IDoctor;
  index: number;
}

export interface ISelectedDoctor {
  selectedDoctors: any;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  pageCount: number;
  paginationCount: number;
}
