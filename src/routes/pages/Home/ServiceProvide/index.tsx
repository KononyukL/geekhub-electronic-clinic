import React from 'react';
import { BoxCard, BoxInfo, Container, FirstTitle, LastTitle, Text } from './styled';
import { ReactComponent as Cardiology } from 'assets/icons/cardiology.svg';
import { ReactComponent as Pulmonology } from 'assets/icons/pulmonology.svg';
import { ReactComponent as Neurology } from 'assets/icons/neurology.svg';
import { ReactComponent as Therapy } from 'assets/icons/therapy.svg';
import { ReactComponent as Dermatology } from 'assets/icons/dermatology.svg';
import { ReactComponent as Gastroenterology } from 'assets/icons/gastroenterology.svg';
import CardInfo from '../CardInfo';

const ServiceProvide = () => {
  return (
    <Container>
      <BoxInfo>
        <FirstTitle>ЧИМ МИ ЗАЙМАЄМОСЬ</FirstTitle>
        <LastTitle>Сервіс що ми надаємо</LastTitle>
        <Text>
          Ми вкладаємо свої знання і досвід, щоб забезпечити оптимальне лікування кожному пацієнту.
          Ми працюємо, щоб підтримати Ваше здоров'я та допомогти Вам повернутися до повноцінного
          життя.
        </Text>
      </BoxInfo>
      <BoxCard>
        <CardInfo
          image={<Cardiology />}
          title="Кардіологія"
          text="Ми постійно вдосконалюємо свої знання та навички, щоб забезпечити найкраще лікування для наших пацієнтів."
        />
        <CardInfo
          image={<Pulmonology />}
          title="Пульмонологія"
          text="Ми використовуємо сучасне обладнання та технології для діагностики та лікування різноманітних захворювань"
        />
        <CardInfo
          image={<Neurology />}
          title="Нейрологія"
          text="Наша команда не просто лікує, ми створюємо атмосферу довіри та підтримки, щоб Ви відчували себе комфортно."
        />
        <CardInfo
          image={<Therapy />}
          title="Терапія"
          text="Ми постійно вдосконалюємо свої знання та навички, щоб забезпечити найкраще лікування для наших пацієнтів"
        />
        <CardInfo
          image={<Dermatology />}
          title="Дерматологія"
          text="Ми використовуємо сучасне обладнання та технології для діагностики та лікування різноманітних захворювань"
        />
        <CardInfo
          image={<Gastroenterology />}
          title="Гастроентерологія"
          text="Наша команда не просто лікує, ми створюємо атмосферу довіри та підтримки, щоб Ви відчували себе комфортно."
        />
      </BoxCard>
    </Container>
  );
};

export default ServiceProvide;
