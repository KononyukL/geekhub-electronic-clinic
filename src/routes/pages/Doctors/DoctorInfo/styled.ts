import { Box, CSSObject, styled, Typography as MUITypography } from '@mui/material';
import {NavLink} from "react-router-dom";
import {theme} from "../../../../theme";

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    padding: '25px',
    marginBottom: '25px',
    boxShadow: '-4px 15px 35px 0 #CCCCCC'
  } as CSSObject;
});

export const WrapperWorkingHours = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: '380px',
    backgroundColor: theme.palette.background.paper,
    padding: '12px',
    border: '1px solid #000000'
  } as CSSObject;
});

export const Wrapper = styled(Box)(() => {
  return {
    paddingRight: '20px'
  } as CSSObject;
});

export const Typography = styled(MUITypography)(() => {
  return {
    maxWidth: '700px',
    width: '100%',
    fontWeight: '400',
    fontSize: '16px',
    color: theme.palette.text.primary,
    marginBottom: '10px'
  } as CSSObject;
});

export const AboutMoreInfo = styled(NavLink)(() => {
  return {
    color: theme.palette.text.secondary,
    fontSize: '14px',

    '&:hover': {
      color: 'black'
    }
  } as CSSObject
})
