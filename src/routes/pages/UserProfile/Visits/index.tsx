import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Select, StyledTab, StyledTabs } from './styled';
import { useTranslation } from 'react-i18next';
import { USER_VISITS_CONFIG } from './config';
import { theme } from 'theme';
import { specializations } from 'store/doctors/thunks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectDoctors } from 'store/doctors';
import MenuItem from '@mui/material/MenuItem';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from 'hooks/usePagination';
import { SelectChangeEvent } from '@mui/material';

export const VISITS_PER_PAGE = 6;

const Visits = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState(0);

  const [tab, setTab] = React.useState(() => {
    const pageParam = searchParams.get('tab');
    return pageParam ? parseInt(pageParam) : 0;
  });

  const [specialist, setSpecialist] = React.useState(() => {
    const pageParam = searchParams.get('specialist');
    return pageParam || 'all';
  });

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount
  });

  const onSetItemsCount = useCallback((count: number) => {
    setItemsCount(count);
  }, []);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { specializations: selectSpecializations } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(specializations());
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, value: number) => {
    setTab(value);
    searchParams.set('tab', `${value}`);
    setSearchParams(searchParams);
    resetPagination();
  };

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;
    setSpecialist(value as string);
    searchParams.set('specialist', value as string);
    setSearchParams(searchParams);
    resetPagination();
  };

  const Component = USER_VISITS_CONFIG[tab].component;

  return (
    <Container>
      <Box>
        <StyledTabs
          TabIndicatorProps={{
            style: { border: `3px solid ${theme.palette.primary.main}` }
          }}
          value={tab}
          onChange={handleTabChange}>
          {USER_VISITS_CONFIG.map((item) => (
            <StyledTab key={item.tabIndex} label={t(item.tabName)} className={undefined} />
          ))}
        </StyledTabs>
        <Select defaultValue={specialist} onChange={handleSelectChange}>
          <MenuItem value="all">{'Всі лікарі'}</MenuItem>
          {selectSpecializations.results.map((el, i) => (
            <MenuItem key={i} value={el.name}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Component
        onSetItemsCount={onSetItemsCount}
        page={page}
        pageCount={pageCount}
        handleChangePage={handleChangePage}
      />
    </Container>
  );
};

export default Visits;
