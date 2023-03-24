import React from 'react';
import { Wrapper, Container } from './styled';
import { Link } from 'react-router-dom';
import Filters from '../../components/Doctors/Filters';
import Main from '../../components/Doctors/Main';

const Doctors = () => {
  return (
    <Wrapper>
      <Link to="/">Головна</Link>/Пошук лікаря
      <Container>
        <Filters />
        <Main />
      </Container>
    </Wrapper>
  );
};

export default Doctors;
