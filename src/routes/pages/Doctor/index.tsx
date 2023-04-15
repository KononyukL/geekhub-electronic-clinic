import React, { useEffect } from 'react';
import { Wrapper, ProfileDoctor, WrapperWorkingHours, Container } from './styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import DoctorBreadcrumbs from './DoctorBreadcrumbs';
import DoctorProfileCard from './DoctorProfileCard';
import WorkingHours from 'components/WorkingHours';
import { doctor } from 'store/doctors/thunks';
import {clearAllData, selectDoctors} from 'store/doctors';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';

const Doctor = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const { doctor: currentDoctor } = useAppSelector(selectDoctors);
  const { doctorId } = useParams();

  useEffect(() => {
    dispatch(clearAllData())
    dispatch(doctor({ doctorId: doctorId as string }));
  }, [doctorId, dispatch]);

  return (
    <Container>
      <DoctorBreadcrumbs currentDoctor={currentDoctor}/>
      <ProfileDoctor>
        <Wrapper>
          <DoctorProfileCard currentDoctor={currentDoctor}/>
          <WrapperWorkingHours>
            <WorkingHours max_date={3} doctorId={doctorId} showAllHours={true} />
          </WrapperWorkingHours>
        </Wrapper>
      </ProfileDoctor>
    </Container>
  );
};

export default Doctor;
