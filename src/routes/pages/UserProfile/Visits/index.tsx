import React, { useCallback, useEffect, useState } from 'react';
import { Container, Select } from './styled';
import { USER_VISITS_CONFIG } from './config';
import { specializations } from 'store/doctors/thunks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectDoctors } from 'store/doctors';
import MenuItem from '@mui/material/MenuItem';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from 'hooks';
import { SelectChangeEvent } from '@mui/material';
import ProfileTabs from 'components/view/profile/ProfileTabs';

export const VISITS_PER_PAGE = 6;

const Visits = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState(0);

  const [tab, setTab] = React.useState(() => {
    const pageParam = searchParams.get('tab');
    return pageParam ? parseInt(pageParam) : 0;
  });

  const [specialist, setSpecialist] = React.useState(() => {
    const specialist = searchParams.get('specialist');
    return specialist || 'all';
  });

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount
  });

  const onSetItemsCount = useCallback((count: number) => {
    setItemsCount(count);
  }, []);

  const dispatch = useAppDispatch();
  const { specializations: selectSpecializations } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(specializations());
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, value: number) => {
    setTab(value);
    resetPagination();
    searchParams.set('tab', `${value}`);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
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
      <ProfileTabs
        sx={{ padding: '24px' }}
        value={tab}
        onChange={handleTabChange}
        tabsList={USER_VISITS_CONFIG}>
        <Select value={specialist} onChange={handleSelectChange}>
          <MenuItem value="all">{'Всі лікарі'}</MenuItem>
          {selectSpecializations?.results?.map((el, i) => (
            <MenuItem key={i} value={el.name}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </ProfileTabs>
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
