import React, { useCallback, useState } from 'react';
import { Container } from './styled';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from 'hooks/usePagination';
import { PATIENT_CONFIG } from './config';
import ProfileTabs from 'components/view/profile/ProfileTabs';

export const PATIENT_PER_PAGE = 6;

const Patient = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState(0);

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
      <ProfileTabs
        sx={{ padding: '24px' }}
        value={tab}
        onChange={handleTabChange}
        tabsList={PATIENT_CONFIG}
      />
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
