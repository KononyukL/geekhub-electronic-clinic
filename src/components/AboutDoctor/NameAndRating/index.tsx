import React, { FC } from 'react';
import { NameDoctor, Rating, Wrapper, Img } from './styled';
import { IDoctor } from '../../../routes/pages/Doctors/typesAndInterfaces';
import IMGStar from '../../../assets/icons/Star.svg'

interface INameAndRating {
  doctor: IDoctor;
}

const NameAndRating: FC<INameAndRating> = ({ doctor }) => {
  return (
    <Wrapper>
      <NameDoctor>
        {doctor.lastName} {doctor.firsName} {doctor.fullName}
      </NameDoctor>
      <Rating>{doctor.rating} <Img src={IMGStar} alt='Star'></Img></Rating>
    </Wrapper>
  );
};

export default NameAndRating;
