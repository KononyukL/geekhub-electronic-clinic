import React, {FC, useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { SelectedDoctor } from '../config';
import Calendar from '../WorkingHours';
import {
  GlobalWrapper,
  MainWrapper,
  DoctorWrapper,
  AboutDoctor,
  PhotoDoctor,
  Img,
  NameAndRating,
  Title,
  Rating,
  Direction,
  LowContainer,
  InfoSCR,
  SpanTitle,
  SpanInfo,
  Text
} from './styled';

const SelectedDoctorList: FC<SelectedDoctor> = ({ selectedDoctors }) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [selectedDoctors]);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(selectedDoctors.length / itemsPerPage);

  const getCurrentDoctors = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return selectedDoctors.slice(startIndex, endIndex);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <GlobalWrapper>
        {selectedDoctors.length > 0 &&
          getCurrentDoctors().map((doctor, index) => (
            <MainWrapper key={index}>
              <DoctorWrapper>
                <AboutDoctor>
                  <PhotoDoctor>
                    <Img src={doctor.photo} alt={doctor.lastName} />
                  </PhotoDoctor>
                  <div>
                    <NameAndRating>
                      <Title>
                        {doctor.lastName} {doctor.firsName} {doctor.fullName}
                      </Title>
                      <Rating>{doctor.rating} ★</Rating>
                    </NameAndRating>
                    <Direction>{doctor.profession}</Direction>
                    <LowContainer>
                      <InfoSCR>
                        <SpanTitle>Стаж:</SpanTitle>
                        <SpanInfo>{doctor.seniority} років</SpanInfo>
                      </InfoSCR>
                      <InfoSCR>
                        <SpanTitle>Категорія:</SpanTitle>
                        <SpanInfo>{doctor.category}</SpanInfo>
                      </InfoSCR>
                      <InfoSCR>
                        <SpanTitle>Прийом:</SpanTitle>
                        <SpanInfo>{doctor.price} грн</SpanInfo>
                      </InfoSCR>
                    </LowContainer>
                  </div>
                </AboutDoctor>
                <Text>{doctor.information}</Text>
              </DoctorWrapper>
              <Calendar />
            </MainWrapper>
          ))}
      </GlobalWrapper>
      {selectedDoctors.length >= 3 ? (
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      ) : null}
    </div>
  );
};

export default SelectedDoctorList;
