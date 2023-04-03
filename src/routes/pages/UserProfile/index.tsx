import React from 'react';
import { Container, StyledTab, StyledTabs } from './styled';
import { USER_PROFILE_CONFIG } from './config';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Component = USER_PROFILE_CONFIG[value].component;

  return (
    <Container>
      <StyledTabs
        orientation="vertical"
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
        value={value}
        onChange={handleChange}>
        {USER_PROFILE_CONFIG.map((item) => (
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

export default UserProfile;
