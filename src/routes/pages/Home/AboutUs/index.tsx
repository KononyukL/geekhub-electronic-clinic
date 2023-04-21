import React from 'react';
import {
  BoxImg,
  BoxInfo,
  Button,
  Container,
  FirstTitle,
  ImgOne,
  ImgTwo,
  LastTitle,
  Text
} from './styled';
import TeamOne from 'assets/icons/team-one.png';
import TeamTwo from 'assets/icons/team-two.png';
import { Box } from '@mui/material';

const AboutUs = () => {
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
        <Text paragraph>
          Ми - команда досвідчених фахівців, які завжди готові вам допомогти. У нашій клініці ми
          дбаємо про кожного пацієнта, надаючи індивідуальний підхід і використовуючи сучасне
          обладнання. Ми знаємо, що здоров'я - це найдорожчий дарунок, і саме тому робимо все
          можливе, щоб наші пацієнти почували себе комфортно і захищено. Відчуйте заботу та увагу до
          свого здоров'я в нашій клініці!
        </Text>
        <Button variant="contained" color="primary">
          Детальніше
        </Button>
      </BoxInfo>
    </Container>
  );
};

export default AboutUs;
