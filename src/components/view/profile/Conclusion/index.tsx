import React from 'react';
import { Box } from '@mui/material';
import { conclusion } from './mockData';
import { ReactComponent as Download } from 'assets/icons/download.svg';
import { useTranslation } from 'react-i18next';
import { Container, Title, Text, BoxInfo, Ol, Li, Button, BoxButton } from './styled';
const Conclusion = () => {
  const { t } = useTranslation();
  return (
    <Container>
      {conclusion.map((el, i) => (
        <Box
          key={i}
          sx={{
            maxWidth: '700px'
          }}>
          <Title variant="h3">{t('userProfile.visits.conclusion')}</Title>
          <BoxInfo sx={{ borderTop: 'none' }}>
            <Title>{t('userProfile.visits.history')}</Title>
            <Text>{el.medicalHistory}</Text>
          </BoxInfo>
          <BoxInfo>
            <Title variant="h3">{t('userProfile.visits.status')}</Title>
            <Text paragraph>{el.objectiveStatus}</Text>
          </BoxInfo>
          <BoxInfo>
            <Title variant="h3">{t('userProfile.visits.diagnosis')}</Title>
            <Text paragraph>{el.diagnosis}</Text>
          </BoxInfo>
          <BoxInfo>
            <Title variant="h3">{t('userProfile.visits.examination')}</Title>
            <Text paragraph>{el.examination}</Text>
          </BoxInfo>
          <BoxInfo sx={{ paddingBottom: 0 }}>
            <Title variant="h3">{t('userProfile.visits.recommendations')}</Title>
            <Ol>
              {el.recommendations.map((recommendation, i) => (
                <Li key={i}>{recommendation}</Li>
              ))}
            </Ol>
          </BoxInfo>
        </Box>
      ))}
      <BoxButton>
        <Button color="primary" startIcon={<Download />}>
          {t('userProfile.visits.download')}
        </Button>
      </BoxButton>
    </Container>
  );
};

export default Conclusion;
