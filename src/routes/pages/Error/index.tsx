import React, { FC } from 'react';
import { Container, Img, Text, Link } from './styled';
import IMGError from 'assets/icons/Error.svg';
import ROUTES from '../../constants';

const Error: FC = () => {
  return (
    <Container>
      <Img src={IMGError} alt="Error" title="Error" />
      <Text>
        Сторінка не знайдена, але головне, що з нашою клінікою Ви завжди знайдете шлях до свого
        здоров’я!
      </Text>
      <Link to={ROUTES.HOME.PATH}>Повернутися на головну</Link>
    </Container>
  );
};

export default Error;
