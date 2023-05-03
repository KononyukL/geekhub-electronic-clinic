import React, { useState } from 'react';
import {
  BoxImg,
  BoxInfo,
  Button,
  Container,
  FirstTitle,
  ImgOne,
  ImgTwo,
  LastTitle,
  Span,
  Text
} from './styled';
import TeamOne from 'assets/icons/team-one.png';
import TeamTwo from 'assets/icons/team-two.png';
import { Box } from '@mui/material';

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Container id="about-us">
      <BoxImg sx={{ width: '50%' }}>
        <Box>
          <ImgOne src={TeamOne} alt="photo team" />
        </Box>
        <Box>
          <ImgTwo src={TeamTwo} alt="photo team" />
        </Box>
      </BoxImg>
      <BoxInfo>
        <FirstTitle variant="h2">ПРО НАШУ КОМАНДУ</FirstTitle>
        <LastTitle variant="h2">Поліклініка MediPlus</LastTitle>
        <Text open={open} paragraph>
          Ми - команда досвідчених фахівців, які завжди готові вам допомогти. У нашій клініці ми
          дбаємо про кожного пацієнта, надаючи індивідуальний підхід і використовуючи сучасне
          обладнання. Ми знаємо, що здоров'я - це найдорожчий дарунок, і саме тому робимо все
          можливе, щоб наші пацієнти почували себе комфортно і захищено. Відчуйте турботу та увагу
          до свого здоров'я в нашій клініці!
          <Span>
            В нашій клініці ми прагнемо не лише лікувати захворювання, але й запобігати їх
            виникненню. Тому ми зосереджуємо увагу на профілактиці та вчимо наших пацієнтів
            правильному стилю життя та здоровому харчуванні. Ми віримо, що зміцнення здоров'я - це
            постійний процес, і готові супроводжувати вас на кожному етапі вашого шляху до здорового
            життя. Наша команда завжди на зв'язку і готова відповісти на будь-які запитання та
            допомогти вам у будь-якій ситуації. Зверніться до нас, і ми з радістю надамо вам
            найкращу можливу медичну допомогу!
          </Span>
        </Text>
        <Button onClick={onClick} variant="contained" color="primary">
          {!open ? 'Детальніше' : 'Приховати'}
        </Button>
      </BoxInfo>
    </Container>
  );
};

export default AboutUs;
