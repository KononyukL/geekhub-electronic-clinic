import React, { FC } from 'react';
import { NameDoctor, Rating, Wrapper, Img } from './styled';
import IMGStar from 'assets/icons/Star.svg';
import { IDoctorProps } from 'routes/pages/Doctor/interfaces';

const NameAndRating: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <Wrapper>
      <NameDoctor>
        {currentDoctor.last_name} {currentDoctor.first_name} {currentDoctor.patronim_name}
      </NameDoctor>
      <Rating>
        {currentDoctor.rating}
        <Img src={IMGStar} alt="Star"></Img>
      </Rating>
    </Wrapper>
  );
};

export default NameAndRating;
