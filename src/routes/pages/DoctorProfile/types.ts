import React from 'react';

export interface IPatientComponent {
  pageCount: number;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  onSetItemsCount: (count: number) => void;
}
