import React, { FC } from 'react';
import { Name, Rating, Wrapper } from './styled';
import { INameAndRating } from '../../../routes/pages/Doctors/typesAndInterfaces';

const NameAndRating: FC<INameAndRating> = ({ doctor }) => {
  return (
    <Wrapper>
      <Name>
        {doctor.lastName} {doctor.firsName} {doctor.fullName}
      </Name>
      <Rating>{doctor.rating} ★</Rating>
    </Wrapper>
  );
};

export default NameAndRating;
