import React, { FC } from 'react';
import { Box, BoxInfo, Title, Typography } from './styled';

interface ICardInfo {
  image: React.ReactElement;
  title: string;
  text: string;
}
const CardInfo: FC<ICardInfo> = ({ image, title, text }) => {
  return (
    <Box>
      {image}
      <BoxInfo>
        <Title>{title}</Title>
        <Typography>{text}</Typography>
      </BoxInfo>
    </Box>
  );
};

export default CardInfo;
