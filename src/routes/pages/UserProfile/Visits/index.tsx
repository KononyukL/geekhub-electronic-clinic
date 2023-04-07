import React from 'react';
import { Container, StyledTab, StyledTabs } from './styled';
import { useTranslation } from 'react-i18next';
import { USER_VISITS_CONFIG } from './config';

const Visits = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  function a11yProps(index: number) {
    return {
      id: `simple-tabpanel-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Component = USER_VISITS_CONFIG[value].component;
  return (
    <Container>
      <StyledTabs
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
        value={value}
        onChange={handleChange}
      >
        {USER_VISITS_CONFIG.map((item) => (
          <StyledTab
            key={item.tabIndex}
            label={t(item.tabName)}
            className={undefined}
            {...a11yProps(item.tabIndex)}
          />
        ))}
      </StyledTabs>
      <Component />
    </Container>
  );
};

export default Visits;
