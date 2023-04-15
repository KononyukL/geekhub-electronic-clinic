import React from 'react';

export interface IVisitsComponent {
  pageCount: number;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  onSetItemsCount: (count: number) => void;
}
