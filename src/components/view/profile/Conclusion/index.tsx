import React, { FC } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Download } from 'assets/icons/download.svg';
import { useTranslation } from 'react-i18next';
import { Container, Title, Text, BoxInfo, Ol, Li, Button, BoxButton } from './styled';
import { IVisit } from 'api/visits/types';

interface IConclusion {
  data: IVisit;
}
const Conclusion: FC<IConclusion> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          maxWidth: '700px'
        }}>
        <Title variant="h3">{t('userProfile.visits.conclusion')}</Title>
        <BoxInfo sx={{ borderTop: 'none' }}>
          <Title>{t('userProfile.visits.history')}</Title>
          <Text>{data.medical_history}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.status')}</Title>
          <Text>{data.objective_status}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.diagnosis')}</Title>
          <Text>{data.diagnosis}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.examination')}</Title>
          <Text>{data.examination}</Text>
        </BoxInfo>
        <BoxInfo sx={{ paddingBottom: 0 }}>
          <Title variant="h3">{t('userProfile.visits.recommendations')}</Title>
          <Ol>
            <Li>{data.recommendations}</Li>
          </Ol>
        </BoxInfo>
      </Box>
      <BoxButton>
        <Button color="primary" startIcon={<Download />}>
          {t('userProfile.visits.download')}
        </Button>
      </BoxButton>
    </Container>
  );
};

export default Conclusion;
