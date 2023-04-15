import { styled } from '@mui/material';
import Input from '../../../Input';

export const WrapperImg = styled('div')(() => {
  return {
    position: 'absolute'
  };
});
export const ImgSwitcher = styled('img')(() => {
  return {
    width: 20,
    position: 'relative',
    cursor: 'pointer',
    left: 290,
    top: -36
  };
});

export const InputProfile = styled(Input)(({ theme }) => {
  return {
    height: '50px',
    paddingLeft: '20px',
    fontSize: '16px',
    color: theme.palette.text.secondary
  };
});
