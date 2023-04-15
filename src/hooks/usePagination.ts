import { useSearchParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

interface IUsePagination {
  clearPagination?: boolean;
  itemsCount: number;
  itemsPerPage?: number;
}

interface IUsePaginationResult {
  page: number;
  pageCount: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  resetPagination: () => void;
}

export const usePagination = ({
  clearPagination,
  itemsCount,
  itemsPerPage = 6
}: IUsePagination): IUsePaginationResult => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState<number>(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  });

  const handleChangePage = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage]
  );

  const resetPagination = useCallback(() => {
    setPage(1);
  }, [setPage]);

  useEffect(() => {
    if (clearPagination) {
      resetPagination();
    }
  }, [clearPagination]);

  useEffect(() => {
    setSearchParams({ page: `${page}` });
  }, [page]);

  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  return {
    page,
    pageCount,
    handleChangePage,
    resetPagination
  };
};
