import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 25px;
  min-height: 532px;
  height: 100%;
  border-radius: 10px;
  background-color: #ffffff;
`;
export const Calendar = styled.div`
  border-radius: 10px;
  max-width: 345px;
  margin: 0 auto;
`;

export const FreeHours = styled.div`
  min-width: 355px;
  width: 100%;
  margin-top: 40px;
`;

export const TimeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 26px;
`;

export const TimeItem = styled.li`
  list-style-type: none;
`;

export const TimeLink = styled(NavLink)`
  display: block;
  width: 65px;
  height: 45px;
  margin: 2px;
  padding-top: 12px;
  text-align: center;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  background-color: #cfcfcf;

  '&:hover ' {
    background-color: rgba(0, 0, 0, 0.47);
  }
`;

export const Data = styled(StaticDatePicker)(() => ({
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
    minHeight: '240px'
  }
}));
