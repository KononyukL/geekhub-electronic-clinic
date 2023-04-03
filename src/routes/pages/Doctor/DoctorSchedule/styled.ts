import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { CSSObject, styled, Box, List as MUIList, ListItem as MUIListItem } from '@mui/material';
import Button from '../../../../components/Button';

export const Container = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '640px',
    margin: '25px',
    minHeight: '532px',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: '#ffffff'
  } as CSSObject;
});

export const Calendar = styled(Box)(({ theme }) => {
  return {
    borderRadius: '10px',
    maxWidth: '345px',
    margin: '0 auto'
  } as CSSObject;
});

export const FreeHours = styled(Box)(({ theme }) => {
  return {
    minWidth: '355px',
    width: '100%',
    marginTop: '40px'
  } as CSSObject;
});

export const List = styled(MUIList)(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  } as CSSObject;
});

export const ListItem = styled(MUIListItem)(({ theme }) => {
  return {
    padding: 0,
    margin: '2px',
    width: '64px',
  } as CSSObject;
});

export const TimeButton = styled(Button)(({ theme }) => {
  return {
    width: '50px',
    height: '45px',
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#cfcfcf',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.47)'
    }
  } as CSSObject;
});

export const Data = styled(StaticDatePicker)(({ theme }) => ({
  '& .MuiPickersToolbar-root': {
    display: 'none'
  },
  '& .css-czq7ql-MuiPickersLayout-root': {
    borderRadius: '10px'
  },
  '& .MuiDialogActions-root': {
    display: 'none'
  },
  '& .MuiPickersLayout-contentWrapper': {
    maxWidth: '454px',
    margin: '0 auto',
    width: '100%'
  },
  '& .MuiDateCalendar-root': {
    marginTop: '12px',
    border: '4px solid #F4F4F4',
    borderRadius: '10px'
  },
  '& .css-1cafy48-MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition': {
    minHeight: '260px'
  }
}));
