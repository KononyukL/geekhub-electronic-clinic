import styled from 'styled-components';
import { Tab, Tabs, tabClasses } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: start;
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  gap: 22px;
`;

export const StyledTabs = styled(Tabs)`
  background: #f9f9f9;
  border-radius: 12px;
  flex: 1 0 15%;
`;

export const StyledTab = styled(Tab)`
  &.${tabClasses.root} {
    align-items: flex-start;
    text-transform: none;
  }

  &.${tabClasses.root}.${tabClasses.selected} {
    color: red;
  }
`;
