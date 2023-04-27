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
import { usePagination } from '../../../hooks/usePagination';
import { useSearchParams } from 'react-router-dom';

const Doctors: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { doctors: allDoctors, specializations: selectSpecializations } =
    useAppSelector(selectDoctors);
  const [selectedDoctors, setSelectedDoctors] = useState<IDoctor[] | null>(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [flagPagination, setFlagPagination] = useState<boolean>(false);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const onSetItemsCount = (count: number) => {
    setItemsCount(count);
  };

  const { page, handleChangePage } = usePagination({
    itemsCount
  });

  useEffect(() => {
    dispatch(doctors({ page: page }));
    dispatch(specializations());
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (selectedDoctors) {
      onSetItemsCount(allDoctors.count);
    }
  }, [selectedDoctors]);

  const handleFilterDoctors = (specialty: string, index: number) => {
    if (allDoctors && allDoctors.results?.length > 0) {
      const filteredDoctors = allDoctors.results?.filter(
        (doctor: IDoctor) => specialty === doctor.specialization
      );
      setSelectedDoctors(filteredDoctors);
      setActiveButtonIndex(index);
    }
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
          page={page}
          pageCount={Math.ceil(allDoctors.count / 6)}
          handleChangePage={handleChangePage}
          flagPagination={flagPagination}
          paginationCount={allDoctors.count}
          selectedDoctors={
            selectedDoctors && selectedDoctors.length > 0 ? selectedDoctors : allDoctors.results
          }
        />
      </Wrapper>
    </Container>
  );
};

export default Doctors;
