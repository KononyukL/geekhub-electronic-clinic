import React, { FC } from 'react';
import { NameDoctor, Rating, Wrapper } from './styled';
import { IDoctor } from '../../../routes/pages/Doctors/typesAndInterfaces';

interface INameAndRating {
  doctor: IDoctor;
}

const NameAndRating: FC<INameAndRating> = ({ doctor }) => {
  return (
    <Wrapper>
      <NameDoctor>
        {doctor.lastName} {doctor.firsName} {doctor.fullName}
      </NameDoctor>
      <Rating>{doctor.rating} ★</Rating>
    </Wrapper>
  );
};

export default NameAndRating;
