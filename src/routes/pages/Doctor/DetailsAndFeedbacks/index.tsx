import React, { FC } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DetailsDoctor from './DetailsDoctor';
import FeedbacksDoctor from './FeedbacksDoctor';
import { AboutDoctor, Container, Wrapper } from './styled';
import { IDoctorProps } from '../interfaces';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Wrapper>
        <AboutDoctor value={value} onChange={handleChange}>
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
      <TabPanel value={value} index={0}>
        <DetailsDoctor currentDoctor={currentDoctor} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FeedbacksDoctor doctorId={currentDoctor.id}/>
      </TabPanel>
    </Container>
  );
};

export default DetailAndFeedbacks;
