import styled from 'styled-components';
import { Tab, tabClasses, Tabs } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
`;

export const StyledTabs = styled(Tabs)`
  background: #f9f9f9;
  border-radius: 12px;
  flex: 1 0 15%;
  padding: 34px;
  margin-bottom: 24px;
`;

export const StyledTab = styled(Tab)`
  &.${tabClasses.root} {
    align-items: flex-start;
    text-transform: none;
  }
`;
