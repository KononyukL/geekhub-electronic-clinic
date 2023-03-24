import React from 'react';
import { StyledWrapper, StyledContainer } from './styled';
import { Link } from 'react-router-dom';
import Filters from '../../components/Doctors/Filters';
import Main from '../../components/Doctors/Main';

const Doctors = () => {
  return (
    <StyledWrapper>
      <Link to="/">Головна</Link>/Пошук лікаря
      <StyledContainer>
        <Filters />
        <Main />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Doctors;
