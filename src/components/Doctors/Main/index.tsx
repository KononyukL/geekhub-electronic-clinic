import React from 'react';
import {
  GlobalWrapper,
  MainWrapper,
  Wrapper,
  AboutDoctor,
  PhotoDoctor,
  Img,
  Container,
  NameAndRating,
  H2,
  Rating,
  Direction,
  LowContainer,
  Info,
  SpanG,
  Span,
  Text,
  Calendar
} from './styled';
import Pagination from '../../Pagination';

const doctors = [
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  },
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  },
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  },
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  },
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  },
  {
    firsName: 'Ілона',
    lastName: 'Андрущенко',
    fullName: 'Макаріна',
    profession: 'Ендокринолог',
    photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
    rating: '4.7',
    category: 'Вища',
    seniority: '17',
    price: '300',
    information:
      'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
  }
];

const Main = () => {
  return (
    <GlobalWrapper>
      {doctors.length > 0 &&
        doctors.map((doctor, index) => (
          <MainWrapper key={index}>
            <Wrapper>
              <AboutDoctor>
                <PhotoDoctor>
                  <Img src={doctor.photo} alt={doctor.lastName} />
                </PhotoDoctor>
                <Container>
                  <NameAndRating>
                    <H2>
                      {doctor.lastName} {doctor.firsName} {doctor.fullName}
                    </H2>
                    <Rating>{doctor.rating} ★</Rating>
                  </NameAndRating>
                  <Direction>{doctor.profession}</Direction>
                  <hr />
                  <LowContainer>
                    <Info>
                      <SpanG>Стаж:</SpanG>
                      <Span>{doctor.seniority} років</Span>
                    </Info>
                    <Info>
                      <SpanG>Категорія:</SpanG>
                      <Span>{doctor.category}</Span>
                    </Info>
                    <Info>
                      <SpanG>Прийом:</SpanG>
                      <Span>{doctor.price} грн</Span>
                    </Info>
                  </LowContainer>
                </Container>
              </AboutDoctor>
              <Text>{doctor.information}</Text>
            </Wrapper>

            <Calendar></Calendar>
          </MainWrapper>
        ))}
      <Pagination />
    </GlobalWrapper>
  );
};

export default Main;
