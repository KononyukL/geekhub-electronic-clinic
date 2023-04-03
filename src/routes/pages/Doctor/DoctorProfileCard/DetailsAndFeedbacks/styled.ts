import {Box, CSSObject, Tabs, styled} from '@mui/material';

export const Container = styled(Box)(({theme}) => {
  return {
    borderRadius: '10px',
   backgroundColor: '#ffffff',
  } as CSSObject
})


export const Wrapper = styled(Box)(({theme}) => {
  return {
    display: 'flex',
  } as CSSObject
})

export const AboutDoctor = styled(Tabs)(({ theme }) => ({
  '& .css-1aquho2-MuiTabs-indicator': {
    height: '0px'
  },
  '& .css-1sbm8hp-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    color: 'black',
    borderRadius: '10px'
  }
}));
