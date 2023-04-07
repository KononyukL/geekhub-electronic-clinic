import React from 'react';
import {
  Accordion,
  BoxAccordion,
  BoxTitle,
  Container,
  FirstTitle,
  LastTitle,
  TypographyQuestion,
  TypographyText
} from './styled';
import { useTranslation } from 'react-i18next';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const Questions = () => {
  const { t } = useTranslation();
  return (
    <Container id="questions">
      <BoxTitle>
        <FirstTitle>{t('home.questions.firstTitle')}</FirstTitle>
        <LastTitle>{t('home.questions.lastTitle')}</LastTitle>
      </BoxTitle>
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">
              {t('home.questions.accordion.questions.one')}
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>{t('home.questions.accordion.text.one')}</TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>{t('home.questions.accordion.questions.two')}</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>{t('home.questions.accordion.text.two')}</TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>{t('home.questions.accordion.questions.three')}</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>{t('home.questions.accordion.text.three')}</TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion> {t('home.questions.accordion.questions.four')}</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>{t('home.questions.accordion.text.four')}</TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion> {t('home.questions.accordion.questions.five')}</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>{t('home.questions.accordion.text.five')}</TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
