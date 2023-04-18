import React from 'react';
import {
  BoxConclusion,
  BoxData,
  StyledButton,
  StyledTextareaAutosize,
  Title,
  TitleData
} from './styled';

const ConclusionDoctor = () => {
  return (
    <BoxConclusion>
      <Title>Заключення</Title>
      <BoxData>
        <TitleData>Анамнез захворювання:</TitleData>
        <StyledTextareaAutosize placeholder="Введіть анемнез пацієнта" minRows={6} />
      </BoxData>
      <BoxData>
        <TitleData>Об’єктивний статус:</TitleData>
        <StyledTextareaAutosize placeholder="Стан пацієнта, огляд" minRows={9} />
      </BoxData>
      <BoxData>
        <TitleData>Діагноз:</TitleData>
        <StyledTextareaAutosize placeholder="Поставте діагноз, якщо це потрібно" minRows={4} />
      </BoxData>
      <BoxData>
        <TitleData>Обстеження:</TitleData>
        <StyledTextareaAutosize
          placeholder="Направлення на обстеження, якщо це потрібно"
          minRows={4}
        />
      </BoxData>
      <BoxData>
        <TitleData>Рекомендації:</TitleData>
        <StyledTextareaAutosize placeholder="Рекомендації з лікування" minRows={6} />
      </BoxData>
      <StyledButton variant="contained" color="secondary">
        Зберегти
      </StyledButton>
    </BoxConclusion>
  );
};

export default ConclusionDoctor;
