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
import { AccordionSummary, AccordionDetails } from '@mui/material';
import CustomExpandIcon from './CustomExpandIcon';

const Questions = () => {
  return (
    <Container id="questions">
      <BoxTitle>
        <FirstTitle>А ЩО ЯКЩО?</FirstTitle>
        <LastTitle>Поширені запитання</LastTitle>
      </BoxTitle>
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">
              Як ви гарантуєте конфіденційність моїх медичних даних?
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Ми поважаємо приватність наших пацієнтів та забезпечуємо конфіденційність медичної
              інформації за допомогою захисних технологій та правильних методів зберігання.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>Як записатися на прийом до лікаря?</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Ви можете зателефонувати в нашу клініку, скористатися онлайн-формою запису на сайті
              або завітати до нас особисто.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>Які види медичних послуг ви надаєте?</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Наша клініка пропонує широкий спектр медичних послуг, включаючи консультації лікарів
              різних спеціальностей, лабораторні дослідження, ультразвукові діагностики та інші
              процедури.{' '}
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>Які методи оплати ви приймаєте?</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Ми приймаємо оплату готівкою, банківською картою та електронними коштами. Розрахунок
              проводиться на ресепшені після прийому у лікаря.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>Як довго триває прийом у лікаря?</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Тривалість прийому залежить від спеціалізації лікаря та мети візиту. Зазвичай прийом
              триває від 20 до 60 хвилин.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
