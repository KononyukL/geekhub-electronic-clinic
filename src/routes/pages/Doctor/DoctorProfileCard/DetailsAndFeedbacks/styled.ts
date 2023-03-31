import styled from 'styled-components';
import {Tabs} from "@mui/material";

export const Container = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const AboutDoctor = styled(Tabs)(() => ({
  '& .css-1aquho2-MuiTabs-indicator': {
    height: '0px'
  },
  '& .css-1sbm8hp-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    color: 'black',
    borderRadius: '10px'
  }
}));


