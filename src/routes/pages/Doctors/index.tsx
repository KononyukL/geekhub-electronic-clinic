import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, ButtonDoctor, WrapperButton, Container } from './styled';
import SelectedDoctorsList from './SelectedDoctorsList';
import DoctorsBreadcrumbs from './DoctorsBreadcrumbs';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectDoctors } from '../../../store/doctors';
import { doctors, specializations } from '../../../store/doctors/thunks';
import { IDoctor } from './typesAndInterfaces';



const Doctors: FC = () => {
  const dispatch = useAppDispatch();
  const { doctors: allDoctors, specializations: selectSpecializations } =
    useAppSelector(selectDoctors);
  const [selectedDoctors, setSelectedDoctors] = useState<IDoctor[]>([]);
  const [activeButton, setActiveButton] = useState('');
  const [flagPagination, setFlagPagination] = useState(false);

  useEffect(() => {
    dispatch(doctors());
    dispatch(specializations());
  }, []);

  const handleFilterDoctors = (specialty: any) => {
    const filteredDoctors =
      allDoctors &&
      allDoctors.results?.filter((doctor: IDoctor) => specialty === doctor.specialization);
    setSelectedDoctors(filteredDoctors);
    setActiveButton(specialty);
    console.log(selectedDoctors);
  };

  return (
    <Container>
      <DoctorsBreadcrumbs />
      <Wrapper>
        <Aside>
          <WrapperButton>
            <ButtonDoctor
              isActiveButton={activeButton === 'Всі лікарі'}
              onClick={() => {
                handleFilterDoctors('Всі лікарі');
                setFlagPagination(!flagPagination);
              }}>
              {/*<Icon src={specialty.icon} alt={specialty.specialty} />*/}
              Всі лікарі
            </ButtonDoctor>
            {selectSpecializations.map((specialty, index) => (
              <ButtonDoctor
                key={index}
                isActiveButton={activeButton === specialty}
                onClick={() => {
                  handleFilterDoctors(specialty);
                  setFlagPagination(!flagPagination);
                }}>
                {/*<Icon src={specialty.icon} alt={specialty.specialty} />*/}
                {specialty}
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
