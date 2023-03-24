import React from 'react';
import { Aside, StyledButton } from './styled';
import { FC } from 'react';
const doctors = ['Дерматолог', 'Ендокринолог', 'Кардіолог'];

const Filters: FC = () => {
  return (
    <Aside>
      <StyledButton children={'Всі лікарі'} />
      {doctors.length > 0 &&
        doctors.map((doctor, index) => <StyledButton key={index} children={doctor} />)}
    </Aside>
  );
};

export default Filters;
