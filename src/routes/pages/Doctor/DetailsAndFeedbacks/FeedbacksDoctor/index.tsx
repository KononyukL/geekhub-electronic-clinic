import React, { FC, useState } from 'react';
import {
  Wrapper,
  Feedbacks,
  StyledBox,
  NameDoctor,
  Feedback,
  Date,
  PaginationWrapper,
  HorizontalLine
} from './styled';
import { Box, Pagination } from '@mui/material';
import IMGStart from '../../../../../assets/icons/Star.svg';

const feedbacks = [
  {
    name: 'Чорний Влад',
    rating: '5',
    date: '23.03.2023',
    feedback: "Я звернувся до ендокринолога з проблемами щодо мого здоров'я.ням до своєї роботи."
  },
  {
    name: 'Макс Прокопенко',
    rating: '5',
    date: '21.02.2023',
    feedback:
      "Я звернувся до ендокринолога з проблемами щодо мого здоров'я. Я був приємно здивований його професіоздоров'я. Я був приємно здивований його професіоналізмом та відповідальним ставленням до своєї роботи."
  },
  {
    name: 'Макс Прокопенко',
    rating: '5',
    date: '21.02.2023',
    feedback:
      "Я звернувся до ендокринолога з проблемами щодо мого здоров'я. Я був приємно здивований його професіоналізмом та відповідальним ставленням до своєї роботи."
  },
  {
    name: 'Макс Прокопенко',
    rating: '5',
    date: '13.01.2022',
    feedback:
      "Я звернувся до ендокринолога з проблемами щодо мого здоров'я. Я був пся до ендокринолога з проблемндокринолога з прооти."
  },
  {
    name: 'Влад Чорний',
    rating: '5',
    date: '10.02.2023',
    feedback:
      "Я звернувся до ендокринолога з проблемами щодо мого здоров'я. Я був приємно здивований його професіоналізмом та відповідальним ставленням до своєї роботи."
  }
];

const FeedbacksDoctor: FC = () => {
  const [page, setPage] = useState<number>(1);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(feedbacks.length / itemsPerPage);

  const getCurrentDoctors = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return feedbacks.slice(startIndex, endIndex);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Wrapper>
        <HorizontalLine />
        {feedbacks.length > 0 &&
          getCurrentDoctors().map((feedback, index) => (
            <Feedbacks key={index}>
              <StyledBox>
                <Box>
                  <NameDoctor>{feedback.name}</NameDoctor>
                  <Box>
                    <img src={IMGStart} alt="Star" />
                    <img src={IMGStart} alt="Star" />
                    <img src={IMGStart} alt="Star" />
                    <img src={IMGStart} alt="Star" />
                    <img src={IMGStart} alt="Star" />
                  </Box>
                </Box>
                <Date>{feedback.date}</Date>
              </StyledBox>
              <Feedback>{feedback.feedback}</Feedback>
              <HorizontalLine />
            </Feedbacks>
          ))}
      </Wrapper>
      <PaginationWrapper>
        {feedbacks.length >= 3 ? (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        ) : null}
      </PaginationWrapper>
    </Box>
  );
};

export default FeedbacksDoctor;
