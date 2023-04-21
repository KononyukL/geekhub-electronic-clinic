import React, { FC } from 'react';
import { BoxInfo, Container, Li, TextInfo, Title, TitleUl, Ul } from './styled';
import { IDoctor } from 'routes/pages/Doctor/interfaces';

interface IAdditionalInformationDoctor {
  profile: IDoctor;
}
const AdditionalInformationDoctor: FC<IAdditionalInformationDoctor> = ({ profile }) => {
  return (
    <Container>
      <Title>Додаткова інформація</Title>
      <TextInfo>
        Зверніть увагу, згідно з політикою нашої поліклінки, персональні дані про кваліфікацію,
        спеціалізацію, стаж, освіту, категорію тощо вносяться виключно після перевірки документів
        через адміністрацію.
      </TextInfo>
      <BoxInfo>
        <TitleUl>Освіта:</TitleUl>
        <Ul>
          <Li>{profile?.education}</Li>
        </Ul>
      </BoxInfo>
      <BoxInfo sx={{ padding: ' 32px 0' }}>
        <TitleUl>Курси:</TitleUl>
        <Ul>
          <Li>{profile?.courses}</Li>
        </Ul>
      </BoxInfo>
      <BoxInfo>
        <TitleUl>Виконувані процедури:</TitleUl>
        <Ul>
          <Li>{profile?.procedures_performed}</Li>
        </Ul>
      </BoxInfo>
    </Container>
  );
};

export default AdditionalInformationDoctor;
