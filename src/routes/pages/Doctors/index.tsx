import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Wrapper, Aside, ButtonDoctor, WrapperButton, Container, Icon } from './styled';
import SelectedDoctorsList from './SelectedDoctorsList';
import DoctorsBreadcrumbs from './DoctorsBreadcrumbs';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectDoctors } from 'store/doctors';
import { doctors, specializations } from 'store/doctors/thunks';
import IMGAllDoctors from 'assets/icons/AllDoctors.svg';
import { usePagination, useUpdateEffect } from 'hooks';
import { useSearchParams } from 'react-router-dom';

const Doctors: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeButton, setActiveButton] = useState(() => {
    const specialist = searchParams.get('specialist');
    return specialist || 'all';
  });

  const dispatch = useAppDispatch();
  const { doctors: allDoctors, specializations: selectSpecializations } =
    useAppSelector(selectDoctors);

  const { page, pageCount, handleChangePage, resetPagination } = usePagination({
    itemsCount: allDoctors.count
  });

  useEffect(() => {
    dispatch(specializations());
  }, []);

  useUpdateEffect(() => {
    const specialist = searchParams.get('specialist');
    const specializationId = selectSpecializations.results.find(
      (item) => item.name === specialist
    )?.id;

    dispatch(
      doctors({
        page: searchParams.get('page') || 1,
        specializationId
      })
    );

    if (specialist && specialist !== activeButton) {
      setActiveButton(specialist);
    }
  }, [searchParams, selectSpecializations.results]);

  const handleFilterDoctors = (specialty: string) => () => {
    searchParams.set('specialist', specialty);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
    setActiveButton(specialty);
    resetPagination();
  };

  return (
    <Container>
      <DoctorsBreadcrumbs />
      <Wrapper>
        <Aside>
          <WrapperButton>
            {selectSpecializations && (
              <ButtonDoctor
                isActiveButton={activeButton === 'all'}
                onClick={handleFilterDoctors('all')}>
                <Icon src={IMGAllDoctors} alt="Всі лікарі" />
                Всі лікарі
              </ButtonDoctor>
            )}
            {selectSpecializations &&
              selectSpecializations.results.map((specialty) => (
                <ButtonDoctor
                  key={specialty.name}
                  isActiveButton={activeButton === specialty.name}
                  onClick={handleFilterDoctors(specialty.name)}>
                  <Icon src={specialty.image} alt={specialty.name} />
                  {specialty.name}
                </ButtonDoctor>
              ))}
          </WrapperButton>
        </Aside>
        <SelectedDoctorsList
          page={page}
          pageCount={pageCount}
          handleChangePage={handleChangePage}
          paginationCount={allDoctors.count}
          selectedDoctors={allDoctors.results}
        />
      </Wrapper>
    </Container>
  );
};

export default Doctors;
