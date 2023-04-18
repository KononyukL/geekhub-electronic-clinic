import React, { useCallback, useState } from 'react';
import { Box, Container, StyledTab, StyledTabs } from './styled';
import { theme } from 'theme';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from 'hooks/usePagination';
import { PATIENT_CONFIG } from './config';
import { useTranslation } from 'react-i18next';

export const PATIENT_PER_PAGE = 6;

const Patient = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState(0);
  const { t } = useTranslation();

  const [tab, setTab] = React.useState(() => {
    const pageParam = searchParams.get('tab');
    return pageParam ? parseInt(pageParam) : 0;
  });

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

  const Component = PATIENT_CONFIG[tab].component;

  return (
    <Container>
      <Box>
        <StyledTabs
          TabIndicatorProps={{
            style: { border: `3px solid ${theme.palette.primary.main}` }
          }}
          value={tab}
          onChange={handleTabChange}>
          {PATIENT_CONFIG.map((item) => (
            <StyledTab key={item.tabIndex} label={t(item.tabName)} className={undefined} />
          ))}
        </StyledTabs>
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

export default Patient;
