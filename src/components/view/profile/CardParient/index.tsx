import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { BoxInfo, Container, Info, Name, NumberCard, PatientInfo, Text, TextSpan } from './styled';
import DataCardPatient from './DataCardPatient';
import ProfileTabs from '../ProfileTabs';
import { PATIENT_CARD_CONFIG } from './config';
import { useSearchParams } from 'react-router-dom';
import { Box, SelectChangeEvent } from '@mui/material';
import { Select } from 'routes/pages/UserProfile/Visits/styled';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectDoctors } from 'store/doctors';
import { specializations } from 'store/doctors/thunks';
import { usePagination } from 'hooks/usePagination';

export const CARD_PER_PAGE = 6;
const CardPatient = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const [tab, setTab] = React.useState(() => {
    const pageParam = searchParams.get('tab');
    return pageParam ? parseInt(pageParam) : 0;
  });
  const [specialist, setSpecialist] = React.useState(() => {
    const pageParam = searchParams.get('specialist');
    return pageParam || 'all';
  });
  const dispatch = useAppDispatch();
  const { specializations: selectSpecializations } = useAppSelector(selectDoctors);

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount
  });

  useEffect(() => {
    dispatch(specializations());
  }, []);

  const onSetItemsCount = useCallback((count: number) => {
    setItemsCount(count);
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

  const Component = PATIENT_CARD_CONFIG[tab].component;

  return (
    <Container>
      <PatientInfo>
        <BoxInfo>
          <UserAvatar />
          <Info>
            <Name>Стерненко Ілона Макарівна</Name>
            <Text>+38 (099) 133 27 13</Text>
            <NumberCard>
              Номер картки пацієнта:<TextSpan> 654665 </TextSpan>
            </NumberCard>
          </Info>
        </BoxInfo>
      </PatientInfo>
      <Box>
        <DataCardPatient />
        <ProfileTabs value={tab} onChange={handleTabChange} tabsList={PATIENT_CARD_CONFIG}>
          {tab === 0 && (
            <Select value={specialist} onChange={handleSelectChange}>
              <MenuItem value="all">{'Всі лікарі'}</MenuItem>
              {selectSpecializations.results.map((el, i) => (
                <MenuItem key={i} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          )}
        </ProfileTabs>
        <Component
          onSetItemsCount={onSetItemsCount}
          page={page}
          pageCount={pageCount}
          handleChangePage={handleChangePage}
        />
      </Box>
    </Container>
  );
};

export default CardPatient;
