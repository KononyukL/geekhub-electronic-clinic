import React, { FC } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Download } from 'assets/icons/download.svg';
import { useTranslation } from 'react-i18next';
import { Container, Title, Text, BoxInfo, Ol, Li, Button, BoxButton } from './styled';

interface IConclusion {
  data: Record<string, unknown>;
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
          <Text>{data.medicalHistory as string}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.status')}</Title>
          <Text paragraph>{data.objectiveStatus as string}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.diagnosis')}</Title>
          <Text paragraph>{data.diagnosis as string}</Text>
        </BoxInfo>
        <BoxInfo>
          <Title variant="h3">{t('userProfile.visits.examination')}</Title>
          <Text paragraph>{data.examination as string}</Text>
        </BoxInfo>
        <BoxInfo sx={{ paddingBottom: 0 }}>
          <Title variant="h3">{t('userProfile.visits.recommendations')}</Title>
          <Ol>
            {(data.recommendations as string[]).map((recommendation, i) => (
              <Li key={i}>{recommendation}</Li>
            ))}
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
