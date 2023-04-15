import React, { useEffect } from 'react';
import { Box, Container, Select, StyledTab, StyledTabs } from './styled';
import { useTranslation } from 'react-i18next';
import { USER_VISITS_CONFIG } from './config';
import { theme } from 'theme';
import { specializations } from 'store/doctors/thunks';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectDoctors } from 'store/doctors';
import MenuItem from '@mui/material/MenuItem';

const Visits = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { specializations: selectSpecializations } = useAppSelector(selectDoctors);

  useEffect(() => {
    dispatch(specializations());
  }, []);
  function a11yProps(index: number) {
    return {
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Component = USER_VISITS_CONFIG[value].component;
  return (
    <Container>
      <Box>
        <StyledTabs
          TabIndicatorProps={{
            style: { border: `3px solid ${theme.palette.primary.main}` }
          }}
          value={value}
          onChange={handleChange}>
          {USER_VISITS_CONFIG.map((item) => (
            <StyledTab
              key={item.tabIndex}
              label={t(item.tabName)}
              className={undefined}
              {...a11yProps(item.tabIndex)}
            />
          ))}
        </StyledTabs>
        <BoxInfo>
          <Info sx={{ minWidth: '104px' }}>{t('userProfile.visits.date')}:</Info>
          <Info>{t('userProfile.visits.time')}:</Info>
          <Info>{t('userProfile.visits.reception')}:</Info>
        </BoxInfo>
        <Select></Select>
      </Box>
      <Component />
    </Container>
  );
};

export default Visits;
