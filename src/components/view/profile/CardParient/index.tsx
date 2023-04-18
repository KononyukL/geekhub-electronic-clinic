import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as UserAvatar } from 'assets/icons/user-avatar.svg';
import { BoxInfo, Container, Info, Name, NumberCard, PatientInfo, Text, TextSpan } from './styled';
import DataCardPatient from './DataCardPatient';
import ProfileTabs from '../ProfileTabs';
import { PATIENT_CARD_CONFIG } from './config';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from '../../../../hooks/usePagination';
import { Box, SelectChangeEvent } from '@mui/material';
import { Select } from '../../../../routes/pages/UserProfile/Visits/styled';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectDoctors } from '../../../../store/doctors';
import { specializations } from '../../../../store/doctors/thunks';

const CardPatient = () => {
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
  const dispatch = useAppDispatch();
  const { specializations: selectSpecializations } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(specializations());
  }, []);

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount
  });

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
          <Select defaultValue="all" onChange={handleSelectChange}>
            <MenuItem value="all">{'Всі лікарі'}</MenuItem>
            {selectSpecializations.results.map((el, i) => (
              <MenuItem key={i} value={el.name}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </ProfileTabs>
        <Component
        // onSetItemsCount={onSetItemsCount}
        // page={page}
        // pageCount={pageCount}
        // handleChangePage={handleChangePage}
        />
      </Box>
    </Container>
  );
};

export default CardPatient;
