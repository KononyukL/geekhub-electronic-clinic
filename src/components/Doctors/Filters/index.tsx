import React from 'react';
import { Aside, StyledButton } from './styled';

const doctors = ['Дерматолог', 'Ендокринолог', 'Кардіолог'];

const Filters = () => {
  return (
    <Aside>
      <StyledButton children={'Всі лікарі'} />
      {doctors.length > 0 &&
        doctors.map((doctor, index) => <StyledButton key={index} children={doctor} />)}
    </Aside>
  );
};

export default Filters;
