import React, { useEffect } from 'react';
import {
  BoxConclusion,
  BoxData,
  Form,
  Span,
  StyledButton,
  StyledTextareaAutosize,
  Title,
  TitleData
} from './styled';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { IFinishAppointmentFormData } from 'api/appointments/types';
import { useNavigate, useParams } from 'react-router-dom';
import { finishAppointment } from 'store/appointments';
import ROUTES from 'routes/constants';
import { getPlannedVisit } from 'store/visits/thunks';
import { selectVisits } from 'store/visits';
import dayjs from 'dayjs';

const ConclusionDoctor = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting }
  } = useForm<any>({
    mode: 'onBlur'
  });

  const { appointmentId } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { plannedVisit } = useAppSelector(selectVisits);

  const isBeforeVisitDate = dayjs().isBefore(dayjs(plannedVisit?.date));

  const onSubmit = async (data: IFinishAppointmentFormData) => {
    if (appointmentId) {
      const { payload } = await dispatch(finishAppointment({ formData: data, id: appointmentId }));

      if (payload) {
        navigate(ROUTES.PATIENTS_DOCTOR.PATH);
        reset();
      }
    }
  };

  useEffect(() => {
    if (appointmentId) {
      dispatch(getPlannedVisit(appointmentId));
    }
  }, [appointmentId]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BoxConclusion>
        <Title>
          Заключення
          {isBeforeVisitDate && <Span>Ви не можете зробити заключення раніше ніж дата візиту</Span>}
        </Title>
        <BoxData>
          <TitleData>Анамнез захворювання:</TitleData>
          <StyledTextareaAutosize
            {...register('medical_history')}
            placeholder="Введіть анемнез пацієнта"
            minRows={6}
          />
        </BoxData>
        <BoxData>
          <TitleData>Об’єктивний статус:</TitleData>
          <StyledTextareaAutosize
            {...register('objective_status')}
            placeholder="Стан пацієнта, огляд"
            minRows={9}
          />
        </BoxData>
        <BoxData>
          <TitleData>Діагноз:</TitleData>
          <StyledTextareaAutosize
            {...register('diagnosis')}
            placeholder="Поставте діагноз, якщо це потрібно"
            minRows={4}
          />
        </BoxData>
        <BoxData>
          <TitleData>Обстеження:</TitleData>
          <StyledTextareaAutosize
            {...register('examination')}
            placeholder="Направлення на обстеження, якщо це потрібно"
            minRows={4}
          />
        </BoxData>
        <BoxData>
          <TitleData>Рекомендації:</TitleData>
          <StyledTextareaAutosize
            {...register('recommendations')}
            placeholder="Рекомендації з лікування"
            minRows={6}
          />
        </BoxData>
        <StyledButton
          disabled={isSubmitting || isBeforeVisitDate || !plannedVisit}
          type="submit"
          variant="contained"
          color="secondary">
          Зберегти
        </StyledButton>
      </BoxConclusion>
    </Form>
  );
};

export default ConclusionDoctor;
