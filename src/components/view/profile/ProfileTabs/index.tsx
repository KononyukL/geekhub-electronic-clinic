import React, { FC, ReactNode } from 'react';
import { theme } from 'theme';
import { StyledBox, StyledTab, StyledTabs } from './styled';
import { SxProps } from '@mui/system/styleFunctionSx';

export interface ITabsList<T> {
  tabName: string;
  tabIndex: number;
  component: FC<T>;
}

interface IProfileTabs<T> {
  value?: any;
  onChange: (event: React.SyntheticEvent, value: any) => void;
  tabsList: ITabsList<T>[];
  children?: ReactNode;
  sx?: SxProps;
}

const ProfileTabs = <T,>({ value, onChange, tabsList, children, sx }: IProfileTabs<T>) => {
  return (
    <StyledBox sx={sx}>
      <StyledTabs
        TabIndicatorProps={{
          style: { border: `3px solid ${theme.palette.primary.main}` }
        }}
        value={value}
        onChange={onChange}>
        {tabsList.map((item) => (
          <StyledTab key={item.tabIndex} label={item.tabName} />
        ))}
      </StyledTabs>
      {children}
    </StyledBox>
  );
};

export default ProfileTabs;
