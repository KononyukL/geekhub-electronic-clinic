import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  min-width: 355px;
  width: 100%;
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
  width: 55px;
  height: 45px;
  margin: 2px;
  padding-top: 12px;
  text-align: center;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  background-color: #cfcfcf;

  &:hover {
    background-color: rgba(0, 0, 0, 0.47);
  }
`;
