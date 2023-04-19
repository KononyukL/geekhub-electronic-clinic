import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, ButtonDoctor, WrapperButton, Container, Icon } from './styled';
import SelectedDoctorsList from './SelectedDoctorsList';
import DoctorsBreadcrumbs from './DoctorsBreadcrumbs';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectDoctors } from 'store/doctors';
import { doctors, specializations } from 'store/doctors/thunks';
import IMGAllDoctors from 'assets/icons/AllDoctors.svg';
import { IDoctor } from '../Doctor/interfaces';

const Doctors: FC = () => {
  const dispatch = useAppDispatch();
  const { doctors: allDoctors, specializations: selectSpecializations } =
    useAppSelector(selectDoctors);
  const [selectedDoctors, setSelectedDoctors] = useState<IDoctor[]>([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [flagPagination, setFlagPagination] = useState<boolean>(false);

  useEffect(() => {
    dispatch(doctors());
    dispatch(specializations());
  }, []);

  const handleFilterDoctors = (specialty: string, index: number) => {
    const filteredDoctors =
      allDoctors &&
      allDoctors.results?.filter((doctor: IDoctor) => specialty === doctor.specialization);
    setSelectedDoctors(filteredDoctors);
    setActiveButtonIndex(index);
  };

  return (
    <Container>
      <DoctorsBreadcrumbs />
      <Wrapper>
        <Aside>
          <WrapperButton>
            {selectSpecializations && (
              <ButtonDoctor
                isActiveButton={activeButtonIndex === 0}
                onClick={() => {
                  handleFilterDoctors('Всі лікарі', 0);
                  setFlagPagination(!flagPagination);
                }}>
                <Icon src={IMGAllDoctors} alt="Всі лікарі" />
                Всі лікарі
              </ButtonDoctor>
            )}
            {selectSpecializations &&
              selectSpecializations.results.map((specialty, index) => (
                <ButtonDoctor
                  key={specialty.name}
                  isActiveButton={activeButtonIndex === index + 1}
                  onClick={() => {
                    handleFilterDoctors(specialty.name, index + 1);
                    setFlagPagination(!flagPagination);
                  }}>
                  <Icon src={specialty.image} alt={specialty.name} />
                  {specialty.name}
                </ButtonDoctor>
              ))}
          </WrapperButton>
        </Aside>
        <SelectedDoctorsList
          flagPagination={flagPagination}
          selectedDoctors={selectedDoctors.length > 0 ? selectedDoctors : allDoctors.results}
        />
      </Wrapper>
    </Container>
  );
};

export default Doctors;
