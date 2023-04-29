import React, { FC, useEffect } from 'react';
import { Wrapper, ProfileDoctor, WrapperWorkingHours, Container } from './styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import DoctorBreadcrumbs from './DoctorBreadcrumbs';
import DoctorProfileCard from './DoctorProfileCard';
import WorkingHours from 'components/WorkingHours';
import { doctor } from 'store/doctors/thunks';
import { clearAllData, selectDoctors } from 'store/doctors';
import { useParams } from 'react-router-dom';

const Doctor: FC = () => {
  const dispatch = useAppDispatch();
  const { doctor: currentDoctor } = useAppSelector(selectDoctors);
  const { doctorId } = useParams();

  useEffect(() => {
    dispatch(clearAllData());
    dispatch(doctor({ doctorId: doctorId as string }));
  }, [doctorId, dispatch]);

  return (
    <Container>
      <DoctorBreadcrumbs currentDoctor={currentDoctor} />
      <ProfileDoctor>
        <Wrapper>
          <DoctorProfileCard currentDoctor={currentDoctor} />
          <WrapperWorkingHours>
            <WorkingHours max_date={3} doctorId={doctorId} showAllHours={true} />
          </WrapperWorkingHours>
        </Wrapper>
      </ProfileDoctor>
    </Container>
  );
};

export default Doctor;
