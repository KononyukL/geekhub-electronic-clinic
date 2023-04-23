import React, { FC } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Download } from 'assets/icons/download.svg';
import { Container, Title, Text, BoxInfo, Button, BoxButton } from './styled';
import { IVisit } from 'api/visits/types';

interface IConclusion {
  data: IVisit;
}
const Conclusion: FC<IConclusion> = ({ data }) => {
  return (
    <Container>
      <Box
        sx={{
          maxWidth: '700px'
        }}>
        <Title variant="h3">Заключення</Title>
        <BoxInfo sx={{ borderTop: 'none' }}>
          <Title>Анамнез захворювання:</Title>
          <Text>{data.medical_history}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">Об’єктивний статус:</Title>
          <Text>{data.objective_status}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">Діагноз:</Title>
          <Text>{data.diagnosis}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">Обстеження:</Title>
          <Text>{data.examination}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">Рекомендації:</Title>
          <Text>{data.recommendations}</Text>
        </BoxInfo>
      </Box>
      <BoxButton>
        <Button color="primary" startIcon={<Download />}>
          Завантажити PDF
        </Button>
      </BoxButton>
    </Container>
  );
};

export default Conclusion;
