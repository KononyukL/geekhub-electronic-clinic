import { Box, CSSObject, styled, Typography as MUITypography } from '@mui/material';
import {NavLink} from "react-router-dom";

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    padding: '25px',
    marginBottom: '25px',
    boxShadow: '-4px 15px 35px 0 #CCCCCC'
  } as CSSObject;
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    paddingRight: '20px'
  } as CSSObject;
});

export const Typography = styled(MUITypography)(({ theme }) => {
  return {
    maxWidth: '700px',
    width: '100%',
    fontWeight: '400',
    fontSize: '16px',
    color: '#000000',
    marginBottom: '10px'
  } as CSSObject;
});

export const AboutMoreInfo = styled(NavLink)(({theme}) => {
  return {
    color: '#989898',
    fontSize: '14px',

    '&:hover': {
      color: 'black'
    }
  } as CSSObject
})
