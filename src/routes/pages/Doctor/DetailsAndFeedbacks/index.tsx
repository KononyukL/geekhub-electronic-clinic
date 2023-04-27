import React, { FC, useCallback, useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DetailsDoctor from './DetailsDoctor';
import FeedbacksDoctor from './FeedbacksDoctor';
import { AboutDoctor, Container, Wrapper } from './styled';
import { IDoctorProps } from '../interfaces';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from '../../../../hooks/usePagination';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const FEEDBACKS_PER_PAGE = 6;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const DetailAndFeedbacks: FC<IDoctorProps> = ({ currentDoctor }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState(0);

  const [tab, setTab] = React.useState(() => {
    const pageParam = searchParams.get('tab');
    return pageParam ? parseInt(pageParam) : 0;
  });

  const onSetItemsCount = useCallback((count: number) => {
    setItemsCount(count);
  }, []);

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount
  });

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
    searchParams.set('tab', `${value}`);
    setSearchParams(searchParams);
    resetPagination();
  };

  return (
    <Container>
      <Wrapper>
        <AboutDoctor value={tab} onChange={handleChange}>
          <Tab
            sx={{
              textTransform: 'none',
              fontSize: '16px'
            }}
            label="Про лікаря"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: 'none',
              fontSize: '16px'
            }}
            label="Відгуки"
            {...a11yProps(1)}
          />
        </AboutDoctor>
      </Wrapper>
      <TabPanel value={tab} index={0}>
        <DetailsDoctor currentDoctor={currentDoctor} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <FeedbacksDoctor
          handleChangePage={handleChangePage}
          page={page}
          pageCount={pageCount}
          onSetItemsCount={onSetItemsCount}
          doctorId={currentDoctor.id}
        />
      </TabPanel>
    </Container>
  );
};

export default DetailAndFeedbacks;
